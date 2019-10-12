import axios from "../axios";

export function fruitSearch(fruitName, locality, minPrice, maxPrice, startTime, endTime) {
  return axios({
    url: '',
    method: 'post',
    data: {
      fruitName,
      locality,
      minPrice,
      maxPrice,
      startTime,
      endTime
    }
  })
}