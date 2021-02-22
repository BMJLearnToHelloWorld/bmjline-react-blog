import { API } from "../utils/request";

const blogAPI = {
  getPublishedBlogs: async function () {
    const res = await API.get("/query/published");
    return res.data;
  },
  getBlogData: async function (id) {
    const res = await API.get("/detail/" + id);
    return res.data;
  },
};

export default blogAPI;
