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
    const imagesReponse = await fetch(baseUrl + "posts", fetchParams("GET"));
    const images = await imagesReponse.json();
    const posts = images.posts;
    return posts;
  }
};

export default api;
