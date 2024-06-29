import axios from 'axios'
import Cookies from 'js-cookie'
import {alertPop, checkRes} from './helper'

axios.defaults.headers.post['Accept'] = 'application/json'
const base_url =
  process.env.NEXT_PUBLIC_BASE_URL ||
  'https://newdevapi.bdtax.com.bd/public/api/'
const token = Cookies.get('bdtax_token') || ''

/* query ---> api url to query with
   no_token ---> acts as a flag for no need to use token */
export const getData = async (query, no_token) => {
  try {
    let data = await axios.get(`${base_url}${query}`, {
      headers: no_token
        ? {}
        : {
            Authorization: `Bearer ${token}`,
            // "lang": i18n?.language || 'en',
            // "responseType": "arraybuffer"
          },
    })

    // if (checkRes(data.status)) {
    return data?.data
    // }
  } catch (error) {
    // checkRes(error?.response?.status);
    // error.response?.data?.messages &&
    // typeof error.response?.data?.messages === "object"
    // ? error.response.data.messages.map((err) => {
    //     alertPop(error_status, err);
    //     })
    // : errorHandle(error);
    // return false;
  }
}

/* query ---> api url to query with
     data ---> data to be posted
     no_token ---> acts as a flag for no need to use token */

export const postData = async (query, data, no_token, showError) => {
  try {
    let res = await axios({
      method: 'post',
      url: `${base_url}${query}`,
      headers: no_token
        ? {}
        : {
            Authorization: `Bearer ${token}`,
            lang: 'en',
          },
      data: data,
    })
    if (checkRes(res?.data.code || res?.data.status_code)) {
      return res
    }
  } catch (error) {
    console.log('error?.response?.data', error?.response)

    if (
      showError &&
      error?.response?.data?.data &&
      Object.keys(error?.response?.data?.data).length
    ) {
      if (error?.response?.data?.message) {
        alertPop('error', error?.response?.data?.message)
      }

      let errors = []

      for (const property in error?.response?.data?.data) {
        errors.push({
          name: property, // required
          errors: error?.response?.data?.data[property],
        })
      }
      return {
        code: 'error',
        errors: errors,
      }
    }
    if (error.response.status) checkRes(error.response.status)
    alertPop(
      'error',
      error?.response?.data?.message || error?.response?.data?.data?.message
    )
    return false
  }
}

export const deleteData = async (query, no_token) => {
  try {
    let data = await axios.delete(`${base_url}${query}`, {
      headers: no_token
        ? {}
        : {
            Authorization: `Bearer ${token}`,
          },
    })
    return data
    // if (checkRes(data.status)) {
    //     // setUserProfile();
    //     return data;
    // } else {
    //     toast.error(msg_undefined);
    // }
  } catch (error) {
    // checkRes(error?.response?.status);
    // error.response?.data?.messages &&
    // typeof error.response?.data?.messages === "object"
    // ? error.response.data.messages.map((err) => {
    //     alertPop(error_status, err);
    //     })
    // : errorHandle(error);
    // return false;
  }
}

export const putData = async (query, data, no_token, showError) => {
  try {
    let res = await axios({
      method: 'put',
      url: `${base_url}${query}`,
      headers: no_token
        ? {}
        : {
            Authorization: `Bearer ${token}`,
            lang: 'en',
          },
      data: data,
    })
    if (checkRes(res?.data.code || res?.data.status_code)) {
      return res
    }
  } catch (error) {
    console.log('error?.response?.data', error?.response)

    if (
      showError &&
      error?.response?.data?.data &&
      Object.keys(error?.response?.data?.data).length
    ) {
      if (error?.response?.data?.message) {
        alertPop('error', error?.response?.data?.message)
      }

      let errors = []

      for (const property in error?.response?.data?.data) {
        errors.push({
          name: property, // required
          errors: error?.response?.data?.data[property],
        })
      }
      return {
        code: 'error',
        errors: errors,
      }
    }
    if (error.response.status) checkRes(error.response.status)
    alertPop(
      'error',
      error?.response?.data?.message || error?.response?.data?.data?.message
    )
    return false
  }
}
