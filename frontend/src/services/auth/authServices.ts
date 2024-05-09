import { API_LOGIN, API_LOGOUT, API_ME, API_REGISTER } from '../../constants/routes';
import { LogIn, SignIn } from '../../constants/requestOptions';
import { createRequestConfig } from '../../constants/requestOptions';
import axios from 'axios';

// Register user.
// const register = async function (userData: any) {
//   const requestConfig = createRequestConfig(userData);
//   const response = await fetch(API_REGISTER, requestConfig);
//   console.log(response);

//   if (response) {
//     const responseData = await response.json();
//     console.log(responseData);
//     localStorage.setItem('userToken', JSON.stringify(responseData));
//     return responseData; // Return the parsed JSON data
//   } else {
//     // Handle error response
//     // For example, throw an error or return null
//     throw new Error('Failed to register user');
//   }
// };

// Register user
const register = async (userData: SignIn) => {
  const response = await axios.post(API_REGISTER, userData);
  if (response.status === 201) {
    // This response emitting the user object with the name, email and the token. We are only storing token in the local storage.
    const { token } = response.data;
    localStorage.setItem('userToken', JSON.stringify(token));
  }
  return response.data;
}

// Log in user.
const login = async function(user: LogIn) {
  const response = await axios.post(API_LOGIN, user);
  if (response.status === 200) {
    // This response emitting the user object with the name, email and the token. We are only storing token in the local storage.
    const { token } = await response.data;
    localStorage.setItem('userToken', JSON.stringify(token));
  }
  return response.data;
}

const me = async function(token: string | null) {
  if(!token) return null;
  // Set token in the authorization headers.
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const response = await axios.get(API_ME, { headers });
  return await response.data;
}

// Logout user.
const logout = async function(token: string | null) {
  if(!token) return null;
  // Set token in the authorization headers.
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const response = await axios.delete(API_LOGOUT, { headers });
  console.log(response);
  if(response.status === 200) {
    localStorage.removeItem('userToken');
  }
  return await response.data;
}

const authService = {
  me,
  login,
  logout,
  register,
};

export default authService;