package com.example.ecanstatbackend.service;

import com.example.ecanstatbackend.entity.Role;
import com.example.ecanstatbackend.entity.User;

import java.util.List;

public interface UserService {
    void saveUser(User user);
    void saveRole(Role role);
    void assignRoleToUser(String username,String rolename);
    User getUserByUsername(String username);
    List<User> getUsers();
    User getUser(String username);
    void deleteUser(int id);
    User getByresetPasswordToken(String token);
    String updatePassword(String token,String newPassword);
    void updateResetPasswordToken(String token,String email);
    void updateUser(User user);


}
