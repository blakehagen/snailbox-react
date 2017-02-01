import axios from 'axios';
const BASE_URL = 'https://snailbox-api.herokuapp.com/api/v1/';

export default {
  login(loginData) {
    return axios.post(`${BASE_URL}login`, {
      email: loginData.email,
      password: loginData.password
    })
      .then(response => {
        console.log('response test --> ', response);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        return response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },

  register(registerData) {
    console.log('registerData data on service ---> ', registerData);
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