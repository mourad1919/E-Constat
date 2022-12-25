package com.example.ecanstatbackend.email;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;

@Service
@RequiredArgsConstructor
public class EmailSenderImpl implements EmailSender{
    private final JavaMailSender javaMailSender;
    @Override
    public void send(String to, String text,String subject) throws MessagingException {
        MimeMessage mimeMessage=javaMailSender.createMimeMessage();
        MimeMessageHelper helper=new MimeMessageHelper(mimeMessage);
        helper.setFrom("mourad.marrouki@esprit.tn");
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(text,true);
        javaMailSender.send(mimeMessage);
        System.out.printf("mail sent to: "+to);

    }
}
