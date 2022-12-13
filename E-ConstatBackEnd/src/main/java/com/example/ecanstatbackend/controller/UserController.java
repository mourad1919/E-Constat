package com.example.ecanstatbackend.controller;

import com.example.ecanstatbackend.email.EmailSender;
import com.example.ecanstatbackend.entity.Role;
import com.example.ecanstatbackend.entity.User;
import com.example.ecanstatbackend.service.UserService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import net.bytebuddy.utility.RandomString;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.websocket.server.PathParam;
import java.util.List;
import java.util.Random;

@RequiredArgsConstructor
@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;
    private final EmailSender emailSender;
    @PostMapping("/saveuser")
    public void saveUser(@RequestBody User user){
        userService.saveUser(user);
    }
    @PostMapping("/saveuserwithroleuser/{rolename}")
    public void saveUserWithRoleUser(@RequestBody User user,@PathVariable String rolename){
        userService.saveUser(user);
        userService.assignRoleToUser(user.getUsername(), rolename);
    }
    @PostMapping("/saverole")
    public void saveRole(@RequestBody Role role){
        userService.saveRole(role);
    }
    @PostMapping("/assignroletouser")
    public void assignRoleToUser(@RequestBody RoleToUser roleToUser){
        userService.assignRoleToUser(roleToUser.getUsername(),roleToUser.getRolename());
    }
    @GetMapping("/getusers")
    public List<User> getUsers(){
        return userService.getUsers();
    }
    @GetMapping("/getuser/{username}")
    public User getUser(@PathVariable String username){
        return userService.getUser(username);
    }
    @PutMapping("/updateuser")
    public void updateuser(@RequestBody User user){
        userService.updateUser(user);
    }
    @PutMapping("/reset_password/{token}/{newPassword}")
    public String resetPassword(@PathVariable String token, @PathVariable String newPassword){
        return userService.updatePassword(token,newPassword);
    }
    @PostMapping("/forgot_password/{username}")
    public void processForgetPassword(@PathVariable String username){
        User user=userService.getUserByUsername(username);
        String token= RandomString.make(30);
        userService.updateResetPasswordToken(token,user.getEmail());
        String resetPasswordLink="http://localhost:8100/reset-password?token="+token;
        try {
            emailSender.send(user.getEmail(),resetPasswordLink);
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }

    }
}
@Getter
@Setter
class RoleToUser{
    private String username;
    private String rolename;
}