import { HttpService as Service } from 'service-http'
class HttpService {
  
  async getJson() {
    const httpService = new Service();
    const response = await httpService.getJson("/v1/list")
    return this.warning(response);
  }
 
  getAsync() {
    const httpService = new Service();
    const response = httpService.getJsonAsync("/v1/list");
    return this.warning(response); 
  }

  //post
  async postJson(data, params) {
    const httpService = new Service();
    const response = await httpService.postJSON("/v1/add", data, params);
    return this.warning(response);
  }

  postAsync(data, params) {
    const httpService = new Service();
    const response = httpService.postJsonAsync("/v1/add", data, params);
    return this.warning(response);
  }

  async postForm(data, params) {
    const httpService = new Service();
    const response = await httpService.postForm("/v1/addForm", data, params);
    return this.warning(response);
  }

  postFormAsync(data, params) {
    const httpService = new Service();
    const response = httpService.postFormAsync("/v1/addForm", data, params);
    return this.warning(response);
  }

  //upload
  async uploadFile(params) {
    const httpService = new Service();
    const response = await httpService.uploadFile("/v1/uploadFile", params)
    return this.warning(response);
  }

  uploadFileAsync(params) {
    const httpService = new Service();
    const response = httpService.uploadFileAsync("/v1/uploadFile", params)
    return this.warning(response);
  }

  async uploadFiles(params) {
    const httpService = new Service();
    const response = await httpService.uploadFiles("/v1/uploadFiles", params)
    return this.warning(response);
  }

  uploadFilesAsync(params) {
    const httpService = new Service();
    const response = httpService.uploadFiles("/v1/uploadFiles", params)
    return this.warning(response);
  }

  warning(response) {
    console.log(response)
    if (response && response.data) {
      if (response.status === 200) {
        alert(response.data.message)
      }
      else {
        alert(response.data.alert)
      }
    }
    else if (response && response.message) {
      alert(response.message)
    }
    return response
  }
}
export default new HttpService();