// 环境
let text_dev = "http://120.24.82.198:8808/dms";
class Config {
  constructor() {
    try {
      // @ts-ignore
      let envVersion = wx.getAccountInfoSync().miniProgram.envVersion;
      console.log(wx.getAccountInfoSync())
      if (envVersion != 'release') {
        // envVersion = 'release'
      }
      this.envVersion = envVersion;
      this.setApiEnv();
    } catch (error) {
      console.log(error)
      this.setApiEnv();
    }
  }

  setApiEnv() {
    this.url = text_dev;
  }

  getServiceUrl(service) {
    return this.url;
  }
}
export default new Config();