package com.project.blogapp.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.project.blogapp.entities.Post;
import com.project.blogapp.entities.User;
import com.project.blogapp.repository.PostRepository;
import com.project.blogapp.requests.PostCreateRequest;
import com.project.blogapp.requests.PostUpdateRequest;
import com.project.blogapp.response.PostResponse;

@Service
public class PostService {

	private PostRepository postRepository;
	private UserService userService;

	public PostService(PostRepository postRepository, UserService userService) {
		this.postRepository = postRepository;
		this.userService = userService;
	}

	public List<PostResponse> getAllPosts(Optional<Long> userId) {
		List<Post> postList;
		if(userId.isPresent())
			postList = postRepository.findByUserId(userId.get());
			else {
				postList = postRepository.findAll();
			}
		return postList.stream().map(p-> new PostResponse(p)).collect(Collectors.toList());
		
	}

	public Post getPostById(Long postId) {
		return postRepository.findById(postId).orElse(null);
	}

	public Post createPost(PostCreateRequest newPostRequest) {
		User user = userService.getUserById(newPostRequest.getUserId());
		if (user == null)
			return null;

		Post toSave = new Post();
		toSave.setTitle(newPostRequest.getTitle());
		toSave.setDescription(newPostRequest.getDescription());
		toSave.setUser(user);
		return postRepository.save(toSave);
	}

	public Post updatePost(Long postId, PostUpdateRequest updatePost) {
		Optional<Post> post = postRepository.findById(postId);
		if (post.isPresent()) {
			Post toUpdate = post.get();
			toUpdate.setDescription(updatePost.getDescription());
			toUpdate.setTitle(updatePost.getTitle());

			postRepository.save(toUpdate);
			return toUpdate;
		}
		return null;
	}

	public void deletePostById(Long postId) {
		postRepository.deleteById(postId);

	}

}
