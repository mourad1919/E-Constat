package com.example.ecanstatbackend.security;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;

public class SecurityUtils {



    public static Optional<String> getCurrentUserLogin() {
        System.out.println("getting security context");
        SecurityContext securityContext = SecurityContextHolder.getContext();
        System.out.println("getting value");
        return Optional.ofNullable(extractPrincipal(securityContext.getAuthentication()));
    }


    private static String extractPrincipal(Authentication authentication) {
        if (authentication == null) {
            System.out.println("auth null");
            return null;
        }
      else   if (authentication instanceof UsernamePasswordAuthenticationToken) {
          System.out.println("AUTH USER PASSS");
            UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =(UsernamePasswordAuthenticationToken)  authentication;
            return (String)usernamePasswordAuthenticationToken.getPrincipal();
        }
        else if (authentication.getPrincipal() instanceof UserDetails) {
            System.out.println("AUTH UserDetails");
            UserDetails springSecurityUser = (UserDetails) authentication.getPrincipal();
            return springSecurityUser.getUsername();
        } else if (authentication.getPrincipal() instanceof String) {

            System.out.println("AUTH String");

            return (String) authentication.getPrincipal();
        }
        return null;
    }

}
