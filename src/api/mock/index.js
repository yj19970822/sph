import mockRequests from "../mockRequests"

//获取首页轮播图数据的接口
export const reqBannerList = () => mockRequests({ url: "/banner", method: "get" })

//获取Floor数据接口
export const reqFloorList = () => mockRequests({ url: "/floor", method: "get" })
