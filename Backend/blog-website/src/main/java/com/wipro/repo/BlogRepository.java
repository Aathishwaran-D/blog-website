package com.wipro.repo;

import com.wipro.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlogRepository extends JpaRepository<Post, Integer> {
    List<Post> findByTitleContainingOrContentContainingOrAuthorContaining(String title, String content, String author);
}