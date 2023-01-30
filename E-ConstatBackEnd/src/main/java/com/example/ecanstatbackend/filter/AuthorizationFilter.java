//package com.example.ecanstatbackend.filter;
//
//import com.auth0.jwt.JWT;
//import com.auth0.jwt.JWTVerifier;
//import com.auth0.jwt.algorithms.Algorithm;
//import com.auth0.jwt.interfaces.DecodedJWT;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.util.ArrayList;
//import java.util.Collection;
//
//import static org.springframework.http.HttpHeaders.AUTHORIZATION;
//import static org.springframework.http.HttpStatus.FORBIDDEN;
//
//public class AuthorizationFilter extends OncePerRequestFilter {
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//        if(request.getServletPath().equals("/user/login")){
//            filterChain.doFilter(request,response);
//            System.out.println("calling filtre response");
//
//        }
//        else{
//            String authorizationHeader=request.getHeader(AUTHORIZATION);
//            if(authorizationHeader!=null && authorizationHeader.startsWith("Bearer ")){
//                try{
//
//                    String token =authorizationHeader.substring("Bearer ".length());
//                    Algorithm algorithm=Algorithm.HMAC256("secret");
//                    JWTVerifier verifier= JWT.require(algorithm).build();
//                    DecodedJWT decodedJWT=verifier.verify(token);
//                    String username=decodedJWT.getSubject();
//
//                   // String[] role=decodedJWT.getClaim("role").asArray(String.class);
//                    Collection<SimpleGrantedAuthority> authorities=new ArrayList<>();
//                    //System.out.println(role[0]);
//                //    authorities.add(new SimpleGrantedAuthority(role[0]));
//                    UsernamePasswordAuthenticationToken authenticationToken=new UsernamePasswordAuthenticationToken(username,null,authorities);
//                    SecurityContextHolder.getContext().setAuthentication(authenticationToken);
//                    System.out.println("calling filtre");
//
//                }catch (Exception exception){
//                    response.setHeader("error",exception.getMessage());
//                    response.setStatus(FORBIDDEN.value());
//                }
//
//
//            }
//            else{
//                System.out.println("calling filtre doFilter");
//
//                filterChain.doFilter(request,response);
//            }
//        }
//
//    }
//}
