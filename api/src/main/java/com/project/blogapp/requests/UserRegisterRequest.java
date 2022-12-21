package com.project.blogapp.requests;

import lombok.Data;

@Data
public class UserRegisterRequest {
	String userName;
	String password;
	String email;
}
