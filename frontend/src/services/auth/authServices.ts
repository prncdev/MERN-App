import { API_REGISTER } from '../../constants/routes';
import { SignIn } from '../../constants/requestOptions';
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
  if (response.status === 200 || response.status === 201) {
    // This response emitting the user object with the name, email and the token. We are only storing token in the local storage.
    const { token } = response.data;
    localStorage.setItem('userToken', JSON.stringify(token));
  }
  return response.data;
}

const authService = {
  register,
};

export default authService;