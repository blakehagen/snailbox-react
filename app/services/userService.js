import axios from 'axios';
const BASE_URL = 'https://snailbox-api.herokuapp.com/api/v1/';

export default {
  login(loginData) {
    return axios.post(`${BASE_URL}login`, {
      email: loginData.email,
      password: loginData.password
    })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        sessionStorage.setItem('user', JSON.stringify(response.data.user));
        return response.data;
      })
      .catch(error => {
        return error;
      });
  },

  register(registerData) {
    return axios.post(`${BASE_URL}signup`, {
      firstName: registerData.firstName,
      lastName: registerData.lastName,
      email: registerData.email,
      password: registerData.password,
      confirmPassword: registerData.confirmPassword
    })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }

};