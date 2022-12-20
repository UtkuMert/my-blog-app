package com.project.blogapp.requests;

import lombok.Data;

@Data
public class PostCreateRequest {
	String description;
	String title;
	Long userId;
}
