package com.project.blogapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.blogapp.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	// query to db
	User findByUserName(String username);
	

}
