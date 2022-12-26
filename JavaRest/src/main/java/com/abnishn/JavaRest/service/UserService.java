package com.abnishn.JavaRest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abnishn.JavaRest.model.User;
import com.abnishn.JavaRest.repository.UserRepo;

@Service
public class UserService {

	@Autowired
	UserRepo ur;
	
	public User postUser(User user) {
		return ur.save(user);
	}
	public List<User> getUser() {
		return ur.findAll();
	}
	public void deleteUser(Long Id) {
		ur.deleteById(Id);
	}
	
	public User updateUser(Long Id, User userDetails) {
		User user=ur.findById(Id).get();
		user.setName(userDetails.getName());
		user.setEmail(userDetails.getEmail());
		return ur.save(user);
	}
}
	

