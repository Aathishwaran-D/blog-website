import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UpdatePost = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: ''
    });

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const res = await axios.get('http://localhost:8001/posts');
            setPosts(res.data);
        } catch (err) {
            console.error('Failed to fetch posts:', err);
        }
    };

    const handleSelectChange = (e) => {
        const postId = e.target.value;
        setSelectedPostId(postId);

        const selectedPost = posts.find(post => post.id.toString() === postId);
        if (selectedPost) {
            setFormData({
                title: selectedPost.title,
                content: selectedPost.content,
                author: selectedPost.author
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:8001/posts/${selectedPostId}`, {
                ...formData,
                updatedAt: new Date().toISOString()
            });
            alert('Post updated successfully!');
            fetchPosts(); // refresh the list
        } catch (error) {
            console.error('Failed to update post:', error);
            alert('Failed to update post.');
        }
    };

    return (
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '20px' }}>
            <h2>Update Post</h2>

            <select value={selectedPostId} onChange={handleSelectChange} style={{ marginBottom: '20px', width: '100%', padding: '10px' }}>
                <option value="">Select a post to update</option>
                {posts.map(post => (
                    <option key={post.id} value={post.id}>
                        {post.title}
                    </option>
                ))}
            </select>

            {selectedPostId && (
                <form onSubmit={handleUpdate}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
                    />
                    <textarea
                        name="content"
                        placeholder="Content"
                        value={formData.content}
                        onChange={handleChange}
                        required
                        rows={5}
                        style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
                    />
                    <input
                        type="text"
                        name="author"
                        placeholder="Author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                        style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
                    />
                    <button type="submit" style={{ padding: '10px 20px' }}>Update Post</button>
                </form>
            )}
        </div>
    );
};

export default UpdatePost;
