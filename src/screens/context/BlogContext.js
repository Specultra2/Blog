import createDataContext from './createDataContext';
import jsonServer from "../api/jsonServer";
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogpost':
      return action.payload;
    case 'edit_blogpost' :
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id
        ? action.payload
        : blogPost;
      });
    case 'add_blogpost':
      return [...state, { id: Math.floor(Math.random() * 99999) , title: action.payload.title, content: action.payload.content }];
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};
const getBlogPosts = dispatch => {
  return async () => {
    const res = await jsonServer.get('/blogposts')
    dispatch({type: 'get_blogpost', payload: res.data})
  }
}

const addBlogPost = dispatch => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', {title: title, content: content});
    // dispatch({ type: 'add_blogpost', payload: {title: title, content: content} });
    if(callback) {
      callback();
    }
   
  };
};
const deleteBlogPost = dispatch => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`)
    dispatch({type: 'delete_blogpost', payload: id})
  };
}

const editBlogPost = dispatch => {
  return async (id, title, content, callback) => {

    await jsonServer.put(`/blogposts/${id}`, {title: title, content: content});
    dispatch({type: 'edit_blogpost', payload: {id: id, title: title, content: content}});
    
    if(callback) {
      callback();
    }
  }
}


export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  [{title: 'TEST POST', content: 'TEST CONTENT'}]
);
