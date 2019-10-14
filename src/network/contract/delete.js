import axios from "../axios";

export function deleteContract(name) {
  return axios({
    url: '/retailer/delete',
    method: 'post',
    data: {
      name,
    }
  })
}