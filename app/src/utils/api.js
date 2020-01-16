const baseUrl = "https://aerolab-challenge.now.sh/";

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
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBjOWIxNmU0OTYwMDAwNjBkMDBhNjgiLCJpYXQiOjE1MTA3NzU1NzR9.3RXwYx0ehfQKYZfZ2XRcDr-jbSwmZI50T1l921fbU4E"
};

const api = {
  getUser: async () => {
    const userResponse = await fetch(baseUrl + "user/me", fetchParams("GET"));
    const userInfo = await userResponse.json();

    return userInfo;
  },
  getImages: async () => {
    const imagesReponse = await fetch(
      baseUrl + "images",
      fetchParams("GET")
    );
    const images = await imagesReponse.json();

    return images;
  }
};

export default api;