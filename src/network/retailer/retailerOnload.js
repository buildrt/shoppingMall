import axios from "../axios";

export function retailerOnload(currentPage,startPage) {
  return axios({
    url: '/retailer/show',
    method: 'post',
    params: {
      currentPage,
      startPage
    }
  })
}