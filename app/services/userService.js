import axios from 'axios';

export default {
  login(loginData) {
    console.log('login data on service ---> ', loginData);
    return axios.get('http://swapi.co/api/people/1')
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }


};