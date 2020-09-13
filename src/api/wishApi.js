import request from "@/utils/request";

const wishApi = {
  // 获取许愿列表（分页）
  wishList(param = {}) {
    return request({
      url: "/wish",
      method: "get",
      params: param
    });
  },

  // 获取一条许愿信息
  getWishById(id) {
    return request({
      url: "/wish/:id",
      method: "get"
    });
  },

  // 添加一条许愿信息
  insertWish(param = {}) {
    return request({
      url: "/wish",
      method: "post",
      data: param
    });
  },

  // 更改一条许愿信息
  editWish(param = {}) {
    return request({
      url: "/wish",
      method: "put",
      data: param
    });
  },

  // 删除一条许愿信息
  deleteWish(param = {}) {
    return request({
      url: "/wish",
      method: "delete",
      data: param
    });
  }
};

export default wishApi;
