import axios from "./axios";

export function register(clientName,name,passWord,phoneNumber) {
  return axios({
    url: '/client/register',
    method: 'post',
    data: {
      clientName,
      passWord,
      name,
      phoneNumber
    }
  })
}