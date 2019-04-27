import axios from 'axios';
import store from '../store/index'

// Base URLs choices
const localDevelopmentUrl = 'http://localhost:4000/';
const productionHerokuUrl = 'https://eclectic-list-server.herokuapp.com/';

// Base URL
const baseURL = process.env.NODE_ENV === 'production' ? productionHerokuUrl : localDevelopmentUrl;

// Attach base url to axios requests
const axiosInstance = axios.create({
  baseURL,
});

// API URLs
const GET_POST_API = 'api/posts/';
const DELETE_POST_API = 'api/posts/delete/';
const ALL_POSTS_API = 'api/posts';
const POSTS_BY_USER_API_URL = 'api/posts/postsByUser/';
const CREATE_POST_API_URL = 'api/posts/createPost/';
const EDIT_POST_API_URL = 'api/posts/edit/';

const CATEGORIES_API_URL = 'api/categories';
const POSTS_FOR_CATEGORY = 'api/posts/postsByCategory/';

const GET_USER_API = 'users/';
const GET_USERS_API = 'users';

const COMMENTS_FOR_POST_API = 'api/comments/commentsForPost/';
const CREATE_COMMENT_API = 'api/comments/';

const UPLOAD_IMAGE_API = 'api/images/';
const UPLOAD_IMAGES_FOR_POST = 'api/images/postMultipleImages/';
const GET_ALL_AVATAR_IMAGES = 'api/images/avatar';
const GET_IMAGE_BY_ID = 'api/images/getImageById/';
const GET_IMAGES_FOR_POST = 'api/images/getImagesForPost/';
const SET_AVATAR_IMAGE_FOR_USER = 'api/images/setAvatarImage';

const SIGNUP_API_URL = 'api/auth/signup';
const LOGIN_API_URL = 'api/auth/login';

// ***************************************
// Functions to connect to API REST server
// ***************************************

// used to modify request by adding JWT to auth object
function add_JWT_To_Response() {
  const token = store.getters['auth/jwt'];
  return {
    'Authorization': 'Bearer ' + token,
    'content-type': 'application/json',
  }
};

// Main api call function using Axios
async function getResourceAxios(url) {
  try {
    // Success, 200 <= response.status < 300
    const response = await axiosInstance.get(url);
    return response;
  } catch (error) {
    // Response.status not in [200, 299]
    return error.response;
  }
};

// Get single post by id
export default async function getPost(postId) {
  try {
    return await getResourceAxios(GET_POST_API + postId);
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Get all posts
export async function getAllPosts() {
  try {
    return await getResourceAxios(ALL_POSTS_API);
  } catch (error) {
    return new Error('Unable to retrieve all posts.');
  }
};

// Get all posts by a user
export async function getPostsByUser(userName) {
  try {
    return await getResourceAxios(POSTS_BY_USER_API_URL + userName);
  } catch (error) {
    return new Error('Unable to retrieve all posts.');
  }
}

// Get all posts for a category
export async function getPostsForCategory(category) {
  try {
    return await getResourceAxios(POSTS_FOR_CATEGORY + category);
  } catch (error) {
    return new Error('Unable to retrieve posts.');
  }

}

// Create post
export async function createPost(body) {
  try {
    const response = await axiosInstance(
      {
        method: 'POST',
        url: CREATE_POST_API_URL,
        data: body,
        headers: add_JWT_To_Response(),
      }
    );
    return response.data;
  } catch (error) {
    console.log(error)
    return error;
  }
};

// Edit post
export async function editPost(body, postId) {
  try {
    const response = await axiosInstance(
      {
        method: 'PUT',
        url: EDIT_POST_API_URL + postId,
        data: body,
        headers: add_JWT_To_Response(),
      }
    );
    return response.data;
  } catch (error) {
    console.log(error)
    return error;
  }
};

// Delete post
export async function deletePost(postId) {
  try {
    const response = await axiosInstance(
      {
        method: 'DELETE',
        url: DELETE_POST_API + postId,
        headers: add_JWT_To_Response(),
      }
    );
    return response.data;
  } catch (error) {
    console.log(error)
    return error;
  }
};

// Get all categories
export async function getCategories() {
  try {
    const response = await getResourceAxios(CATEGORIES_API_URL);
    return response;
  } catch (error) {
    console.log('getCategories', error);
    return error;
  }
};

// Get singular category
export async function getCategory(categoryName) {
  try {
    const res = await getResourceAxios(CATEGORIES_API_URL + categoryName);
    return res;
  } catch (error) {
    return error;
  }

}

// Upload single image
export async function uploadSingleImage(image) {
  const formData = new FormData();
  formData.append('file', image);
  try {
    const response = await axiosInstance({
      url: UPLOAD_IMAGE_API,
      data: formData,
    }
    );
    const status = response.status;
    const returnObj = { status };
    if (status === 200) {
      return Object.assign(returnObj, { resource: response });
    }
    return Object.assign(returnObj, { message: response.message });
  } catch (error) {
    return error;
  }
}

// Get user by username
export async function getUser(username) {
  try {
    return await getResourceAxios(GET_USER_API + username);
  } catch (error) {
    console.log(error); //TODO change this
    return error;
  }
};

// get all users
export async function getUsers() {
  const res = await getResourceAxios(GET_USERS_API);
  return res;
};

// Get all avatar images
export async function getAllAvatarImages() {
  try {
    const res = await getResourceAxios(GET_ALL_AVATAR_IMAGES);
    return res.data;
  } catch (error) {
    return error;
  }
}

// Get image by id
export async function getImageById(ImageId) {
  try {
    const res = await getResourceAxios(GET_IMAGE_BY_ID + ImageId);
    return res.data;
  } catch (error) {
    return error;
  }
}

// get all images for post
export async function getImagesForPost(postId) {
  try {
    const res = await getResourceAxios(GET_IMAGES_FOR_POST + postId);
    return res.data;
  } catch (error) {
    return error;
  }
}

// Set user avatar image
export async function setAvatarImageForUser(reqBody) {
  try {
    const response = await axiosInstance.put(SET_AVATAR_IMAGE_FOR_USER, reqBody);
    return response;
  } catch (error) {
    return error;
  }
}

// Upload multiple images for a post
export async function uploadImagesForPost(images, postId) {
  const url = UPLOAD_IMAGES_FOR_POST + postId;
  const formData = new FormData();
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    formData.append('file', image);
  }
  try {
    const response = await axiosInstance({
      method: 'POST',
      url,
      data: formData,
    }
    );
    const status = response.status;
    const returnObj = { status };
    if (status === 200) {
      return Object.assign(returnObj, { resource: response });
    }
    return Object.assign(returnObj, { message: response.message });
  } catch (error) {
    return error;
  }

}

// Get all comments for a post
export async function getCommentsForPost(postId) {
  try {
    return await getResourceAxios(COMMENTS_FOR_POST_API + postId);
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Create a comment for a post
export async function createComment(body) {
  try {
    const response = await axiosInstance(
      {
        method: 'POST',
        url: CREATE_COMMENT_API,
        data: body,
        headers: add_JWT_To_Response(),
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

// User signup/creation
export async function signup(body) {
  try {
    const response = await axiosInstance(
      {
        method: 'POST',
        url: SIGNUP_API_URL,
        data: body,
      }
    )
    return response;
  } catch (error) {
    return error;
  }
}

// User login
export async function login(body) {
  try {
    const response = await axiosInstance(
      {
        method: 'POST',
        url: LOGIN_API_URL,
        data: body,
      }
    )
    return response;
  } catch (error) {
    return error;
  }
}
