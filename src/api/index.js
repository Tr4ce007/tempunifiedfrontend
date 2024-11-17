import axios from 'axios';

const API = axios.create({ baseURL: 'https://unified-blog-api.onrender.com/' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchBlog = (id) => API.get(`/blogs/${id}`);
export const fetchBlogs = (page) => API.get(`/blogs?page=${page}`);
export const fetchBlogsBySearch = (searchQuery) => API.get(`/blogs/search?searchQuery=${searchQuery.search || 'none'}`);
export const createBlog = (newBlog) => API.post('/blogs', newBlog);
export const updateBlog = (id, updatedBlog) => API.patch(`/blogs/${id}`, updatedBlog);
export const deleteBlog = (id) => API.delete(`/blogs/${id}`);
export const likeBlog = (id) => API.patch(`/blogs/${id}/likeBlog`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
