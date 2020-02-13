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
  getPosts: async () => {
    const postsResponse = await fetch(baseUrl + "posts", fetchParams("GET"));
    const images = await postsResponse.json();
    const posts = images.posts;
    return posts;
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
  editCategory: async categoryId => {
    const categoriesResponse = await fetch(
      baseUrl + `category/:${categoryId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await categoriesResponse.json();
    const categories = data.categories;
    return categories;
  },
  deleteCategory: async categoryId => {
    const categoriesResponse = await fetch(
      baseUrl + `category/:${categoryId}`,
      {
        method: "DELETE",
        headers: {
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
