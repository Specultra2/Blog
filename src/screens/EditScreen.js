import React, {useState, useContext} from 'react'

import { StyleSheet  } from 'react-native'
import BlogPostForm from './components/BlogPostForm';
import { Context } from "./context/BlogContext";
const EditScreen = ({navigation}) => {
  const {state, editBlogPost} = useContext(Context);
  const id = navigation.getParam('id')
  const blogPost = state.find(
    blogPost => blogPost.id === id
  );
  return (
  <BlogPostForm 
  initialValues={ { title: blogPost.title, content: blogPost.content} }
  onSubmit={(title, content) => {
    editBlogPost(id, title, content, () => navigation.pop())
  }} />
  );
};


const style = StyleSheet.create({})

export default EditScreen
