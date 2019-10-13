import axios from "../axios";

export function add(name, phonenumber, address) {
  return axios({
    url: '/retailer/insert',
    method: 'post',
    params: {
      name,
      phonenumber,
      address
    }
  })
}