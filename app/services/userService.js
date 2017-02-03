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
  },

  getUser(userId, token) {
    let options = axios.create({
      headers: {'Bearer': token}
    });

    console.log('userId on service ---> ', userId);
    return axios.get(`${BASE_URL}user/${userId}`, options)
      .then(response => {
        console.log('getUser on service response', response);
        return response;
      })
      .catch(error => {
        console.log(error);
      });
  }

};