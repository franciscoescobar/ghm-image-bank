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
  Accept: "application/json",
};

const api = {
  getUser: async () => {
    const userResponse = await fetch(baseUrl + "user/me", fetchParams("GET"));
    const userInfo = await userResponse.json();

    return userInfo;
  },
  getPosts: async () => {
    const postsResponse = await fetch(baseUrl + "posts", fetchParams("GET"));
    const images = await postsResponse.json();
    const posts = images.posts;
    return posts;
  },
  postPost: async (formData) => {
    const postResponse = await fetch(baseUrl + "post", { 
      method: "POST",
      body: formData
    });
    const images = await postResponse.json();
    const post = images.post;
    return post;
  },
  getCategories: async() => {
    const categoriesResponse = await fetch(baseUrl + "category", fetchParams("GET"));
    const data = await categoriesResponse.json();
    const categories = data.categories;
    return categories;
  },
  postCategory: async(formData) => {
    const categoryResponse = await fetch(baseUrl + "category", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name: formData})
    });
    const data = await categoryResponse.json();
    const category = data.category;
    return category;
  }
};

export default api;
