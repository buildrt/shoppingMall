import axios from "../axios";

export function fruitSearch(minPrice, maxPrice, startTime, endTime) {
  return axios({
    url: '/commodities/likeSearch',
    method: 'post',
    params: {
      minPrice,
      maxPrice,
      startTime,
      endTime
    }
  })
}