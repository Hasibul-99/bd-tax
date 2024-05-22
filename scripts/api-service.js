import axios from "axios";
import { checkRes, alertPop } from "./helper";
import Cookies from "js-cookie";

axios.defaults.headers.post['Accept'] = 'application/json';
const base_url = process.env.NEXT_PUBLIC_BASE_URL || 'https://newdevapi.bdtax.com.bd/public/api/';
const token = Cookies.get("bdtax_token") || "";


/* query ---> api url to query with
   no_token ---> acts as a flag for no need to use token */
export const getData = async (query, no_token) => {
    try {
        let data = await axios.get(`${base_url}${query}`, {
            headers: no_token ? {} : {
                'Authorization': `Bearer ${token}`,
                // "lang": i18n?.language || 'en',
                // "responseType": "arraybuffer"
            },
        });

        if (checkRes(data.status)) {
            return data?.data;
        }
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
};

/* query ---> api url to query with
     data ---> data to be posted
     no_token ---> acts as a flag for no need to use token */

export const postData = async (query, data, no_token, showError) => {
    try {
        let res = await axios({
            method: "post",
            url: `${base_url}${query}`,
            headers: no_token ? {} : {
                'Authorization': `Bearer ${token}`,
                "lang": i18n?.language || 'en'
            },
            data: data,
        });
        if (checkRes(res?.data.code || res?.data.status_code)) {
            return res;
        } else {
            if (res?.data?.errors && Object.keys(res.data.errors).length !== 0) {
                let error = res.data.errors;

                for (const prop in error) {
                    if (error[prop][0]) alert(error[prop][0])
                }
            }
        }
    } catch (error) {
        console.log("error?.response?.data", error?.response?.data?.data?.message);

        if (showError && error?.response?.data?.data && Object.keys(error?.response?.data?.data).length) {
            let errors = [];

            for (const property in error?.response?.data?.data) {
                errors.push({
                    name: property, // required
                    errors: error?.response?.data?.data[property],
                })

            }
            return {
                code: "error",
                errors: errors
            }
        }
        alertPop("error", error?.response?.data?.data?.message);
        return false;
    }
};