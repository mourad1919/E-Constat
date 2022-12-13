package com.example.ecanstatbackend;

import com.example.ecanstatbackend.entity.Role;
import com.example.ecanstatbackend.entity.User;
import com.example.ecanstatbackend.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
public class ECanstatBackEndApplication {

    public static void main(String[] args) {
        SpringApplication.run(ECanstatBackEndApplication.class, args);
    }
    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();}



    @Bean
    CommandLineRunner run(UserService userService)
    {
        return args -> {

/*
            userService.saveRole(new Role(0,"ROLE_USER"));
            userService.saveRole(new Role(0,"ROLE_ADMIN"));

            userService.saveUser(new User(0,"Mourad","Mourad","mourad.marrouki@esprit.tn","Mourad123","password123",null,null));
            userService.saveUser(new User(0,"Mohamed","Mohamed","marroukimourad0@gmail.com","Mohamed123","password123",null,null));


            userService.assignRoleToUser("Mohamed123","ROLE_USER");
            userService.assignRoleToUser("Mourad123","ROLE_ADMIN");*/

        };
    }

}
