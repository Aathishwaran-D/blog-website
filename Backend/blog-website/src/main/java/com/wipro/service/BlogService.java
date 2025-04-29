package com.wipro.service;

import com.wipro.entity.Post;
import com.wipro.repo.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogService {
    // This class will contain the business logic for the blog application
    // It will interact with the repository layer to perform CRUD operations on the blog posts

    @Autowired
    private BlogRepository blogRepository;

    // Example method to create a new post
    public Post createPost(Post post) {
        // Logic to save a new post to the repository
        return blogRepository.save(post);
    }
    // Example method to get all posts
    public List<Post> getAllPosts() {
        // Logic to fetch all posts from the repository
        return blogRepository.findAll();
    }
    public Post getPostById(int id) {
        // Logic to fetch a post by ID from the repository
        return blogRepository.findById(id).orElse(null);
    }
    // Example method to update an existing post
    public Post updatePost(int id, Post post) {
        // Logic to update an existing post in the repository
        Post existingPost = blogRepository.findById(id).orElse(null);
        if (existingPost != null) {
            existingPost.setTitle(post.getTitle());
            existingPost.setContent(post.getContent());
            existingPost.setAuthor(post.getAuthor());
            existingPost.setUpdatedAt(post.getUpdatedAt());
            return blogRepository.save(existingPost);
        }
        return null; // or throw an exception if post not found
    }
    // Example method to get a post by ID


    // Example method to delete a post
    public void deletePost(int id) {
        // Logic to delete a post from the repository
        blogRepository.deleteById(id);
    }

    public List<Post> searchPosts(String keyword) {
        return blogRepository.findByTitleContainingOrContentContainingOrAuthorContaining(keyword, keyword, keyword);
    }

}
