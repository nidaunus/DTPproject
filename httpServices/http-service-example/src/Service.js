import axios from "axios";
import * as qs from 'query-string'

class HttpService {

  baseUrl = "http://localhost:8080";

  constructor(auth) {
    axios.defaults.baseURL = this.baseUrl;
    this.auth = auth;
  }

  async token(){
    return await this.auth.getToken();
   }
   
  //get

  /**
  * jsdoc
  * @param {string} url
  * @param {object} params
  */
  async getJson(url, params) {
    try {
      const queryParams = new URLSearchParams(params).toString();
      const response = await axios.get(queryParams ? `${url}?${queryParams}` : url,
        {
          params: {
            search: qs.parse(queryParams, { parseBooleans: true })
          },
          headers: {
            Authorization: 'token',
            'Content-Type': 'application/json'
          }
        })
      return response;
    }
    catch (error) {
      return error;
    }
  }

  /**
  * jsdoc
  * @param {string} url
  * @param {object} params
  */
  getJsonAsync(url, params) {
    const queryParams = new URLSearchParams(params).toString();
    return axios.get(queryParams ? `${url}?${queryParams}` : url,
      {
        params: {
          search: qs.parse(queryParams, { parseBooleans: true })
        },
        headers: {
          Authorization: 'token',
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        return res
      }, (error) => {
        return error;
      })
  }

  //post

  /**
   * 
   * @param {string} url 
   * @param {object} data 
   * @param {object} params 
   * @returns 
   */
  async postJSON(url, data, params) {
    try {
      const queryParams = JSON.stringify(params)
      const response = await axios.post(url, data, {
        params: {
          queryParams: queryParams
        },
        headers: {
          Authorization: 'token',
          'Content-Type': 'application/json'
        }
      })
      return response;
    }
    catch (error) {
      return error;
    }
  }

  /**
* jsdoc
* @param {string} url
* @param {object} data
* @param {object} params 
*/
  postJsonAsync(url, data, params) {
    const queryParams = JSON.stringify(params)
    return axios.post(url, data, {
      params: {
        queryParams: queryParams
      },
      headers: {
        Authorization: 'token',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        return res
      }, (error) => {
        return error;
      })
  }

  /**
   * jsdoc
   * @param {string} url
   * @param {object} formData
   * @param {object} params
   */
  async postForm(url, formData, params) {
    try {
      const queryParams = JSON.stringify(params)
      const data = new FormData();
      Object.keys(formData)
        .forEach((key) => {
          data.append(key, formData[key]);
        });
      const response = await axios.post(url, data, {
        params: {
          queryParams: queryParams
        },
        headers: {
          Authorization: 'token',
          'Content-Type': 'multipart/form-data',
        },
      })
      return response
    }
    catch (error) {
      return error;
    }
  }

  /**
 * jsdoc
 * @param {string} url
 * @param {object} formData
 * @param {object} params
 */
  postFormAsync(url, formData, params) {
    const queryParams = JSON.stringify(params)
    const data = new FormData();
    Object.keys(formData)
      .forEach((key) => {
        data.append(key, formData[key]);
      });
    return axios.post(url, data, {
      params: {
        queryParams: queryParams
      },
      headers: {
        Authorization: 'token',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        return response
      }, (error) => {
        return error;
      })
  }

  //upload file
  /**
* jsdoc
* @param {string} url
* @param {object} formData
* @param {object} params
*/
  async uploadFile(url, formData, params) {
    try {
      const queryParams = JSON.stringify(params)
      var data = new FormData();
      data.append("file", formData);
      return await axios.post(url, data,
        {
          params: {
            queryParams: queryParams
          },
          headers: {
            Authorization: 'token',
            'Content-Type': 'multipart/form-data'
          },
        })
    }
    catch (error) {
      return error;
    }
  }

  /**
   * 
   * @param {string} url 
   * @param {object} formData 
   * @param {object} params 
   * @returns 
   */
  uploadFileAsync(url, formData, params) {
    const queryParams = JSON.stringify(params)
    var data = new FormData();
    data.append("file", formData);
    return axios.post(url, data,
      {
        params: {
          queryParams: queryParams
        },
        headers: {
          Authorization: 'token',
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((result) => {
        return result
      })
      .catch((error) => {
        return error;
      });
  }

  //multi upload files
  /**
  * jsdoc
  * @param {string} url
  * @param {Array} formData
  * @param {object} params 
  */
  async uploadFiles(url, formData, params) {
    try {
      const queryParams = JSON.stringify(params)
      var data = new FormData();
      for (let i = 0; i < formData.length; i++) {
        data.append("file", formData[i]);
      }
      return await axios.post(url, data,
        {
          params: {
            queryParams: queryParams
          },
          headers: {
            Authorization: 'token',
            'Content-Type': 'multipart/form-data',
          },
        })
    }
    catch (error) {
      return error;
    }
  }

  /**
  * jsdoc
  * @param {string} url
  * @param {Array} formData
  * @param {object} params 
  */
  uploadFilesSync(url, formData, params) {
    const queryParams = JSON.stringify(params)
    var data = new FormData();
    for (let i = 0; i < formData.length; i++) {
      data.append("file", formData[i]);
    }
    return axios.post(url, data,
      {
        params: {
          queryParams: queryParams
        },
        headers: {
          Authorization: 'token',
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((result) => {
        return result
      })
      .catch((error) => {
        return error;
      });
  }

}
export default HttpService;