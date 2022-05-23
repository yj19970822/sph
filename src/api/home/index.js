import request from "../requests"

export const getCatagoryList = () =>
  request({
    method: "get",
    url: "/product/getBaseCategoryList",
  })
