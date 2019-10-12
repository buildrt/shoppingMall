import axios from "../axios";

export function edit(fruitName, locality, price) {
  return axios({
    url: '',
    method: 'post',
    data: {
      fruitName,
      locality,
      price
    }
  })
}