package com.abnishn.JavaRest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PathVariable;

import com.abnishn.JavaRest.model.User;
import com.abnishn.JavaRest.service.UserService;

@Controller
@RestController
@RequestMapping("/new")
public class UserController {
	
	@Autowired
	UserService us;
	
	@RequestMapping(value="/user", method=RequestMethod.POST)
	public User postUser(@RequestBody User user) {
		return us.postUser(user);
	}
	@RequestMapping(value="/user", method=RequestMethod.GET)
	public List <User> readUser() {
		return us.getUser();
	}
	@RequestMapping(value="/user/{id}", method=RequestMethod.PUT)
	public User readuser(@PathVariable(value="id") Long id, @RequestBody User userDetails) {
		return us.updateUser(id, userDetails);
	}
	@RequestMapping(value="/user/{id}", method=RequestMethod.DELETE)
	public void deleteUser(@PathVariable(value = "id") Long id) {
	    us.deleteUser(id);
	}
}
