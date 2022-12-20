package com.project.blogapp.entities;

import javax.persistence.*;

import lombok.Data;

@Entity
@Table(name = "user")
@Data
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;

	private String userName;
	private String email;
	private String password;
}
