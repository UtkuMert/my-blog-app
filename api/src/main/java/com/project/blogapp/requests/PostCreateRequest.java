package com.project.blogapp.requests;

import java.util.Date;

import lombok.Data;

@Data
public class PostCreateRequest {
	String description;
	String title;
	Long userId;
	String category;
	String imgUrl;
	Date createdDate;
}
