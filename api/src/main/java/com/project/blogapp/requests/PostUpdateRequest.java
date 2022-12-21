package com.project.blogapp.requests;

import lombok.Data;

@Data
public class PostUpdateRequest {

	String title;
	String description;
	String category;
	String imgUrl;

}
