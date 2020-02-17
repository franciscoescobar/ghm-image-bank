import Category from "../components/Categories/Category";

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
      const data = await userResponse.json();
      const user = data.user;
      return user;
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
  getFilteredPosts: async formData => {
    const postsResponse = await fetch(baseUrl + "posts", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    const images = await postsResponse.json();
    const posts = images.posts;
    return posts;
  },
  postPost: async formData => {
    try {
      const postResponse = await fetch(baseUrl + "post", {
        method: "POST",
        body: formData
      });
      const images = await postResponse.json();
      const post = images.post;
      return post;
    } catch (error) {
      console.log(error);
    }
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
  postCategory: async formData => {
    const categoryResponse = await fetch(baseUrl + "category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    const data = await categoryResponse.json();
    const category = data.category;
    return category;
  },
  editCategory: async category => {
    const categoryResponse = await fetch(
      baseUrl + `category/${category.name}/${category._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    console.log(categoryResponse);
    const data = await categoryResponse.json();
    const categories = data.categories;
    return categories;
  },
  deleteCategory: async category => {
    const categoriesResponse = await fetch(
      baseUrl + `category/${category._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    console.log(categoriesResponse);
    const data = await categoriesResponse.json();
    const categories = data.categories;
    return categories;
  }
};

export default api;
