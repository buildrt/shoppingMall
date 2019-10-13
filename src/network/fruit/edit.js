import axios from "../axios";

export function edit(fruitname, locality, price) {
  return axios({
    url: '/commodities/insert',
    method: 'post',
    data: {
      fruitname,
      locality,
      price
    }
  })
}