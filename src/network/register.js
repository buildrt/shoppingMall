import axios from "./axios";

export function register(clientname,name,password,phonenumber) {
  return axios({
    url: '/client/register',
    method: 'post',
    data: {
      clientname,
      password,
      name,
      phonenumber
    }
  })
}