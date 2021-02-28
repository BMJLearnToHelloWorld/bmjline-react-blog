import { API } from "../utils/request";

const blogAPI = {
  getPublishedBlogs: async function (pageNo) {
    const res = await API.get("/query/published", {
      params: {
        pageNo: pageNo,
      },
    });
    return res.data;
  },
  getBlogData: async function (id) {
    const res = await API.get("/detail/" + id);
    return res.data;
  },
};

export default blogAPI;
