import axios from "../axios";

export function deleteRetailer(name) {
  return axios({
    url: '/retailer/delete',
    method: 'post',
    params: {
      name,
    }
  })
}