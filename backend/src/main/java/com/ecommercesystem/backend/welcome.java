package com.ecommercesystem.backend;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class welcome {
	
	@GetMapping("/hello")
	public String ShowWelcome() {
		return "Hello users,\n ecommers (group4) application works well";
	}
}
