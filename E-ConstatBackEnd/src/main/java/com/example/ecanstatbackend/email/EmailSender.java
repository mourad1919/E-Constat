package com.example.ecanstatbackend.email;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;

public interface EmailSender {
    void send(String to, String text,String subject) throws MessagingException;
}
