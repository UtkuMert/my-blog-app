package com.project.blogapp.entities;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import lombok.Data;

@Entity
@Table(name="post")
@Data
public class Post {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	Long id;
	
	@ManyToOne(fetch = FetchType.EAGER)								// fetching user info too.
	@JoinColumn(name="user_id",nullable=false)
	@OnDelete(action = OnDeleteAction.CASCADE) 						//when user delete, user's post delete too.
	User user;
	
	String title;
	String category;
	String imgUrl;

	@Lob
	@Column(columnDefinition="text")
	String description;
	
	@Temporal(TemporalType.TIMESTAMP)
	Date createdDate;
}
