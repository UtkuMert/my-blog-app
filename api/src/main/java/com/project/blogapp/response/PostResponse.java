package com.project.blogapp.response;

import com.project.blogapp.entities.Post;

import lombok.Data;

@Data
public class PostResponse {
// values that we want to return after fetch
	Long id;
	Long userId;
	String userName;
	String title;
	String description;
	String category;
	String imgUrl;
	
	public PostResponse(Post entity) {
		this.id = entity.getId();
		this.userId = entity.getUser().getId();
		this.userName = entity.getUser().getUserName();
		this.title=entity.getTitle();
		this.description=entity.getDescription();
		this.category=entity.getCategory();
		this.imgUrl=entity.getImgUrl();
	}
}
