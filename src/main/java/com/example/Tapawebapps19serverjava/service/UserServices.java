package com.example.Tapawebapps19serverjava.service;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Tapawebapps19serverjava.model.User;



@RestController
public class UserServices {
	
	User Rishi = new User(1,"rishi123","Shourya","Chatterjee",6);
	User Neil = new User(2,"Neil2","Neil","Chatterjee",0);
	User Ani = new User(3,"Ani3", "Anindita","Mozumder",35);
    
	User[] users = {Rishi,Neil,Ani};
	@GetMapping("/api/user")
	public User[] findAllUser() {
		
		return users;
	}

}
