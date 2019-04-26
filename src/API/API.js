import axios from 'axios';
import store from '../store/index'

// const GET_POST_API = 'http://localhost:4000/api/posts/';
// const DELETE_POST_API = 'http://localhost:4000/api/posts/delete/';
// const ALL_POSTS_API = 'http://localhost:4000/api/posts';
// const POSTS_BY_USER_API_URL = "http://localhost:4000/api/posts/postsByUser/";

// const CATEGORIES_API = 'http://localhost:4000/api/categories';
// const CATEGORY_API_URL = "http://localhost:4000/api/categories/";
// const POSTS_FOR_CATEGORY = "http://localhost:4000/api/posts/postsByCategory/";

// const GET_USER_API = 'http://localhost:4000/users/';
// const GET_USERS_API = 'http://localhost:4000/users';

// const COMMENTS_FOR_POST_API = 'http://localhost:4000/api/comments/commentsForPost/';
// const CREATE_COMMENT_API = 'http://localhost:4000/api/comments/';

// const UPLOAD_IMAGE_API = 'http://localhost:4000/api/images/';
// const UPLOAD_IMAGES_FOR_POST = 'http://localhost:4000/api/images/postMultipleImages/';
// const GET_ALL_AVATAR_IMAGES = 'http://localhost:4000/api/images/avatar';
// const GET_IMAGE_BY_ID = 'http://localhost:4000/api/images/getImageById/';
// const GET_IMAGES_FOR_POST = 'http://localhost:4000/api/images/getImagesForPost/';
// const SET_AVATAR_IMAGE_FOR_USER = 'http://localhost:4000/api/images/setAvatarImage';

// const SIGNUP_API_URL = "http://localhost:4000/api/auth/signup";
// const LOGIN_API_URL = "http://localhost:4000/api/auth/login";


const GET_POST_API = 'https://eclectic-list.herokuapp.com/api/posts/';
const DELETE_POST_API = 'https://eclectic-list.herokuapp.com/posts/delete/';
const ALL_POSTS_API = 'https://eclectic-list.herokuapp.com/api/posts';
const POSTS_BY_USER_API_URL = "https://eclectic-list.herokuapp.com/api/posts/postsByUser/";

const CATEGORIES_API = 'https://eclectic-list.herokuapp.com/api/categories';
const CATEGORY_API_URL = "https://eclectic-list.herokuapp.com/api/categories/";
const POSTS_FOR_CATEGORY = "https://eclectic-list.herokuapp.com/api/posts/postsByCategory/";

const GET_USER_API = 'https://eclectic-list.herokuapp.com/users/';
const GET_USERS_API = 'https://eclectic-list.herokuapp.com/users';

const COMMENTS_FOR_POST_API = 'https://eclectic-list.herokuapp.com/api/comments/commentsForPost/';
const CREATE_COMMENT_API = 'https://eclectic-list.herokuapp.com/api/comments/';

const UPLOAD_IMAGE_API = 'https://eclectic-list.herokuapp.com/api/images/';
const UPLOAD_IMAGES_FOR_POST = 'https://eclectic-list.herokuapp.com/api/images/postMultipleImages/';
const GET_ALL_AVATAR_IMAGES = 'https://eclectic-list.herokuapp.com/api/images/avatar';
const GET_IMAGE_BY_ID = 'https://eclectic-list.herokuapp.com/api/images/getImageById/';
const GET_IMAGES_FOR_POST = 'https://eclectic-list.herokuapp.com/api/images/getImagesForPost/';
const SET_AVATAR_IMAGE_FOR_USER = 'https://eclectic-list.herokuapp.com/api/images/setAvatarImage';

const SIGNUP_API_URL = "https://eclectic-list.herokuapp.com/api/auth/signup";
const LOGIN_API_URL = "https://eclectic-list.herokuapp.com/api/auth/login";




// used to modify request by adding JWT to auth object
function add_JWT_To_Response() {
  const token = store.getters['auth/jwt'];
  return {
    'Authorization': 'Bearer ' + token,
    'content-type': 'application/json',
  }
};

async function getResourceAxios(url) {
  try {
    // Success, 200 <= response.status < 300
    const response = await axios.get(url);
    return response;
  } catch (error) {
    // Response.status not in [200, 299]
    return error.response;
  }
};

export default async function getPost(postId) {
  try {
    return await getResourceAxios(GET_POST_API + postId);
  } catch (error) {
    console.log(error);
    return error;
  }
};
export async function getAllPosts() {
  try {
    return await getResourceAxios(ALL_POSTS_API);
  } catch (error) {
    return new Error('Unable to retrieve all posts.');
  }
};

export async function getPostsByUser(userName) {
  try {
    return await getResourceAxios(POSTS_BY_USER_API_URL + userName);
  } catch (error) {
    return new Error('Unable to retrieve all posts.');
  }
}


export async function getPostsForCategory(category) {
  try {
    return await getResourceAxios(POSTS_FOR_CATEGORY + category);
  } catch (error) {
    return new Error('Unable to retrieve posts.');
  }

}

// Create or edit post
export async function postModification(body, postURL, method) {
  try {
    const response = await axios(
      {
        method,
        url: postURL,
        data: body,
        headers: add_JWT_To_Response(),
      }
    );
    return response.data;
  } catch (error) {
    console.log(error)
    return new Error(`Error in message modification using ${method} method`);
  }
};

export async function deletePost(postId) {
  try {
    const response = await postModification({}, DELETE_POST_API + postId, 'DELETE');
    return response;
  } catch (error) {
    console.log(error);
    return new Error('Error in deleting post.');
  }
};

export async function getCategories() {
  try {
    const response = await getResourceAxios(CATEGORIES_API);
    return response;
  } catch (error) {
    console.log("getCategories", error);
  }
};

export async function getCategory(categoryName) {
  try {
    const res = await getResourceAxios(CATEGORY_API_URL + categoryName);
    return res;
  } catch (error) {
    return error;
  }

}

export async function uploadSingleImage(image) { // Uses Axios
  const formData = new FormData();
  formData.append('file', image);
  try {
    const response = await axios.post(
      UPLOAD_IMAGE_API,
      formData,
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

export async function getUser(username) {
  try {
    return await getResourceAxios(GET_USER_API + username);
  } catch (error) {
    console.log(error); //TODO change this
  }
};

export async function getUsers() {
  const res = await getResourceAxios(GET_USERS_API);
  return res;
};

export async function getAllAvatarImages() {
  try {
    const res = await getResourceAxios(GET_ALL_AVATAR_IMAGES);
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function getImageById(ImageId) {
  try {
    const res = await getResourceAxios(GET_IMAGE_BY_ID + ImageId);
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function getImagesForPost(postId) {
  try {
    const res = await getResourceAxios(GET_IMAGES_FOR_POST + postId);
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function setAvatarImageForUser(reqBody) {
  try {
    const response = await axios.put(SET_AVATAR_IMAGE_FOR_USER, reqBody);
    return response;
  } catch (error) {
    return error;
  }
}

export async function uploadImagesForPost(images, postId) {
  const url = UPLOAD_IMAGES_FOR_POST + postId;
  const formData = new FormData();
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    formData.append('file', image);
  }
  try {
    const response = await axios.post(
      url,
      formData,
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

export async function getCommentsForPost(postId) {
  try {
    return await getResourceAxios(COMMENTS_FOR_POST_API + postId);
  } catch (error) {
    console.log(error);
  }
};

export async function createComment(body) {
  try {
    const response = await axios(
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

export async function signup(body) {
  try {
    const response = await axios(
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

export async function login(body) {
  try {
    const response = await axios(
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



// OLD!
// async function getResource(url) {
  //   try {
  //     const response = await fetch(url);
  //     const json = await response.json();
  //     const status = response.status;
  //     const returnObj = { status };
  //     if (status === 200) return Object.assign(returnObj, { resource: json });
  //     return Object.assign(returnObj, { message: json.message });
  //   } catch (error) {
  //     console.log(error)
  //     return error;
  //   }
  // };