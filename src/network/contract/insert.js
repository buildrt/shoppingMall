import axios from "../axios";

export function insert(barcode, type, retailerid, createtime,) {
  return axios({
    url: '/contract/insert',
    method: 'post',
    data: {
      barcode,
      type,
      retailerid,
      createtime,
    }
  })
}