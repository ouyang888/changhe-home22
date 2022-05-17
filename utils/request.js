import Config from "../config/index";
// import token from "../utils/token";
export default class Request {
  // static token;
  static async https(options) {
    const { url, header = {}, method = 'get', data = {}, dataType, service } = options;
    if (!options.httpCount) {
      options.httpCount = 1;
    } else {
      options.httpCount++
    }
    let lastUrl = Config.getServiceUrl(service) + url;
    header.clientSource = 'weixin';
    if (!url.includes('/user/getToken')) {
      try {
        // let tokenResult = await token.getToken();
        // header.Authorization = `Bearer ${tokenResult}`; 
      } catch (error) {
        if (options.httpCount > 3) {
          throw error;
        }
        return Request.https(options)
      }
    }

    return new Promise((resolve, reject) => {
      // console.log(header)
      wx.request({
        url: lastUrl,
        //@ts-ignore
        header: header,
        method,
        data,
        dataType,
        success: (data) => Request.successHandle(data, options, resolve, reject),
        fail: (err) => {
          console.log(err)
          reject(err)
        },
      });
    })
  }
  
}