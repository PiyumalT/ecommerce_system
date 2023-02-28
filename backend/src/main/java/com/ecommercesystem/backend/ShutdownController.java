package com.ecommercesystem.backend;


import org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext;
import org.springframework.boot.web.servlet.context.ServletWebServerInitializedEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class ShutdownController implements ApplicationListener<ServletWebServerInitializedEvent> {
    private ServletWebServerApplicationContext context;

    @Override
    public void onApplicationEvent(ServletWebServerInitializedEvent event) {
        this.context = event.getApplicationContext();
    }

    @GetMapping("/shutdown")
    public String shutdown() {
        System.out.println("Shutting down server...");
        try {
            context.stop();
            System.exit(0);
            System.out.println("Shutdown completed.");
            return "Shutdown completed.";
        } catch (Exception e) {
            System.out.println("Error shutting down server: " + e.getMessage());
            return "Error shutting down server: " + e.getMessage();
        }
    }
}
