const baseUrl = "http://localhost:8080/";
const fetchParams = (method, data = "") => {
  const body = data ? { body: JSON.stringify(data) } : {};

  return {
    method: method,
    headers: apiHeaders,
    credentials: "same-origin",
    ...body
  };
};

const apiHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

const api = {
  getUser: async formData => {
    const userResponse = await fetch(baseUrl + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password
      })
    });
    const user = await userResponse.json();
    return user;
  },
  signUser: async formData => {
    try {
      const userResponse = await fetch(baseUrl + "signup", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });
      if(userResponse.status !== 200 && userResponse.status !== 201){
        throw new Error("Creating new user failed");
      }
    } catch (error) {
      console.log(error);
    }
  },
  getPosts: async (page) => {
    const postsResponse = await fetch(baseUrl + `posts/?page=${page}`, fetchParams("GET"));
    const posts = await postsResponse.json();
    return posts;
  },
  getPost: async (postId) => {
    const postResponse = await fetch(baseUrl + `post/${postId}`, fetchParams("GET"));
    const images = await postResponse.json();
    const post = images.post;
    return post;
  },
  getFilteredPosts: async (formData, page) => {
    const postsResponse = await fetch(baseUrl + `posts/?page=${page}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    const posts = await postsResponse.json();
    return posts;
  },
  postPost: async (formData, token) => {
    try {
      const postResponse = await fetch(baseUrl + "post", {
        method: "POST",
        headers: {
          Authorization: 'Bearer ' + token
        },
        body: formData
      });
      const images = await postResponse.json();
      const post = images.post;
      return post;
    } catch (error) {
      console.log(error);
    }
  },
  editPost: async (formData, id, token) => {
    try {
      const postResponse = await fetch(baseUrl + `post/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: 'Bearer ' + token
        },
        body: formData
      });
      const images = await postResponse.json();
      const post = images.doc;
      return post;
    } catch (error) {
      console.log(error);
    }
  },
  deletePost: async (id, token) => {
    const postsResponse = await fetch(
      baseUrl + `post/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + token
        }
      }
    );
    console.log(postsResponse);
    const data = await postsResponse.json();
    const posts = data.posts;
    return posts;
  },
  getCategories: async () => {
    const categoriesResponse = await fetch(
      baseUrl + "category",
      fetchParams("GET")
    );
    const data = await categoriesResponse.json();
    const categories = data.categories;
    return categories;
  },
  postCategory: async (formData, token) => {
    const categoryResponse = await fetch(baseUrl + "category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify(formData)
    });
    const data = await categoryResponse.json();
    const category = data.category;
    return category;
  },
  editCategory: async (category, token) => {
    const categoryResponse = await fetch(
      baseUrl + `category/${category.name}/${category._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + token
        }
      }
    );
    const data = await categoryResponse.json();
    const categories = data.categories;
    return categories;
  },
  deleteCategory: async (category, token) => {
    const categoriesResponse = await fetch(
      baseUrl + `category/${category._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: 'Bearer ' + token,
          "Content-Type": "application/json"
        }
      }
    );
    const data = await categoriesResponse.json();
    const categories = data.categories;
    return categories;
  }
};

export default api;
