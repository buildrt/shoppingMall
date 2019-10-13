import axios from "../axios";

export function deleteFruit(fruitname) {
  return axios({
    url: '/commodities/delete',
    method: 'post',
    data: {
      fruitname,
    }
  })
}