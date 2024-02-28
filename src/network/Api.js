import axios from "axios";

const BASE_URL = "https://private-anon-c95d3ebd51-itodpbni.apiary-mock.com";
const LOGIN_ENDPOINT = "https://dummyjson.com/auth/login";
// FETCH
export const getAccount = async () => {
  const response = await fetch(`${BASE_URL}/account`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export const getCustomer = async () => {
  const response = await fetch(`${BASE_URL}/customers`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export const auth = async (userName, password) => {
  const response = await fetch(LOGIN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: userName,
      password: password,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data);
  return data;
};

// AXIOS
export const authV2 = async (userName, password) => {
  const response = await axios.post(LOGIN_ENDPOINT, {
    username: userName,
    password: password,
  });
  console.log(response.data);
  return response.data;
};

export const getAccountV2 = async () => {
  const response = await axios.get(`${BASE_URL}/account`);
  return response.data;
};

export const getTransfer = async () => {
  const response = await axios.get(`${BASE_URL}/menu/transfer`);
  return response.data;
};

export const getPPOB = async () => {
  const response = await axios.get(`${BASE_URL}/menu/ppob`);
  return response.data;
};

export const getPromo = async () => {
  const response = await axios.get(`${BASE_URL}/menu/promo`);
  return response.data;
};
