import axios from "../axios";

export function retailerSearch(partName) {
  return axios({
    url: '/retailer/showPart',
    method: 'post',
    params: {
      partName
    }
  })
}