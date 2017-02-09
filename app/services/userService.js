import axios from 'axios';
const BASE_URL = 'https://snailbox-api.herokuapp.com/api/v1/';

export default {
  login(loginData) {
    return axios.post(`${BASE_URL}login`, {
      email: loginData.email,
      password: loginData.password
    })
      .then(response => {
        if (response.status === 200) {
          sessionStorage.setItem('token', response.data.token);
          sessionStorage.setItem('userId', response.data.user._id);
        }
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
        console.log('response', response);
        if (response.status === 200) {
          sessionStorage.setItem('token', response.data.token);
          sessionStorage.setItem('userId', response.data.user._id);
        }
        return response.data;
      })
      .catch(error => {
        return error;
      });
  },

  verifyUser(){
    return axios.get(`${BASE_URL}verify`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    })
      .then(response => {
        return response.data;
      })
      .catch(err => {
        return err;
      })
  },

  getUser(userId){
    return axios.get(`${BASE_URL}user/${userId}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    })
      .then(response => {
        return response;
      })
      .catch(err => {
        return err;
      })
  }


};