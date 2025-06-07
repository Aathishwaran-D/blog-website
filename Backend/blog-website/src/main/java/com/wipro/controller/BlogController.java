package com.wipro.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Map;

import com.wipro.entity.Post;
import com.wipro.service.BlogService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class BlogController {
    // This class will handle the HTTP requests and responses for the blog application
    // It will use the service layer to perform CRUD operations on the blog posts

    @Autowired
    private BlogService blogService;
    // Example method to create a new post
    @PostMapping("/posts")
    public String createPost(@RequestBody Post post) {
        try {
            blogService.createPost(post);
            System.out.println("Received Post: " + post.toString());
            return "Post created successfully";
        }
        catch (Exception e) {
            return "Error creating post: " + e.getMessage();
        }
    }
    // Example method to get all posts
    @GetMapping("/posts")
    public List<Post> getAllPosts() {
        return blogService.getAllPosts();
    }
    // Example method to get a post by ID
    @GetMapping("/posts/{id}")
    public Post getPostById(@PathVariable int id) {
        return blogService.getPostById(id);
    }
    // Example method to update an existing post
    @PutMapping("/posts/{id}")
    public Post updatePost(@PathVariable int id, @RequestBody Post post) {
        return blogService.updatePost(id, post);
    }
    // Example method to delete a post
     @DeleteMapping("/posts/{id}")
     public void deletePost(@PathVariable int id) {
         blogService.deletePost(id);
     }
    // Example method to search posts by keyword

    @PostMapping("/search")
    public List<Post> searchPosts(@RequestBody Map<String, String> request) {
        String keyword = request.get("keyword");
        return blogService.searchPosts(keyword);
    }
}
