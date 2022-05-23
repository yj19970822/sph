import axios from "axios"
import nprogress from "nprogress"
import "nprogress/nprogress.css"

let requests = axios.create({
  baseURL: "/api",
  timeout: 5000,
})

requests.interceptors.request.use((config) => {
  nprogress.start()
  return config
})

requests.interceptors.response.use(
  (res) => {
    nprogress.done()
    return res.data
  },
  (error) => {
    alert(error.message)
    return new Promise()
  }
)

export default requests
