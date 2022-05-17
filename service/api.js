import Request from "../utils/request";

//已邀好友
export function userLogin() {
  return Request.https({
      url: '/Auth/login',
      method: 'POST'
  })
}