package com.example.ecanstatbackend.service;

import com.example.ecanstatbackend.entity.Role;
import com.example.ecanstatbackend.entity.User;
import com.example.ecanstatbackend.repository.RoleRepository;
import com.example.ecanstatbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService, UserDetailsService {

    private final UserRepository userRepository;

    private final RoleRepository roleRepository;


    private final PasswordEncoder passwordEncoder;
    @Override
    public void saveUser(User user) {
        if(userRepository.findByUsername(user.getUsername())!=null){
            System.out.println("username already exist");
        }
        else if(userRepository.findByEmail(user.getEmail())!=null){
            System.out.println("email already exist");
        }
        else{
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(user);
        }

    }

    @Override
    public void saveRole(Role role) {
        if(roleRepository.findByName(role.getName())!=null){
            System.out.println("role already exist");
        }
        else{
            roleRepository.save(role);
        }
    }

    @Override
    public void assignRoleToUser(String username, String rolename) {
        User user=userRepository.findByUsername(username);
        Role role=roleRepository.findByName(rolename);
        user.setRole(role);
        userRepository.save(user);
    }

    @Override
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUser(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }

    @Override
    public User getByresetPasswordToken(String token) {
        return userRepository.findByResetPasswordToken(token);
    }

    @Override
    public String updatePassword(String token, String newPassword) {
        User user=userRepository.findByResetPasswordToken(token);
        BCryptPasswordEncoder passwordEncoder1=new BCryptPasswordEncoder();
        String encodedPasswprd=passwordEncoder.encode(newPassword);
        user.setPassword(encodedPasswprd);
        user.setResetPasswordToken(null);
        userRepository.save(user);
        return "Your password successfully updated.";

    }

    @Override
    public void updateResetPasswordToken(String token, String email) {
        User user=userRepository.findByEmail(email);
        if(user!=null){
            user.setResetPasswordToken(token);
            userRepository.save(user);
        }
        else{
            System.out.println("User not found");
        }

    }

    @Override
    public void updateUser(User user) {
        userRepository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user=userRepository.findByUsername(username);
        if(user==null){
            System.out.println("User not found");
        }
        else{
            System.out.println("User found in db");
        }
        Collection<SimpleGrantedAuthority> authorities=new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(user.getRole().getName()));
        return new org.springframework.security.core.userdetails.User(user.getUsername(),user.getPassword(),authorities);
    }
}
