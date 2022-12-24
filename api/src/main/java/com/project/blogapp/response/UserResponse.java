package com.project.blogapp.response;

import com.project.blogapp.entities.User;

import lombok.Data;

@Data
public class UserResponse {
	Long id;
	int userAvatar;
	String userName;
	String email;
	
	public UserResponse(User entity) {
		this.id = entity.getId();
		this.userName = entity.getUserName();
		this.userAvatar = entity.getUserAvatar();
		this.email= entity.getEmail();
	}
}
