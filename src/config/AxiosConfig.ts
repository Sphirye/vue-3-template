import VueAxios from "vue-axios";
import axios from "axios"
import {AxiosError} from "axios"
import { App } from "vue";

export default class AxiosConfig {

    static init(app: App) {

        app.use(VueAxios, axios)
        app.provide('axios', app.config.globalProperties.axios)

        // axios.defaults.baseURL = ConstantTool.BASE_URL
        axios.interceptors.request.use(request => {
            console.log('Request:', request)
            return request
        })

        axios.interceptors.request.use(config => {
            return config
        })

        axios.interceptors.response.use(response => {
            console.log('Response:', response)
            return response
        }, async (error: AxiosError) => {
            if (error.response) {

                if (error.response.status == 401) {
                    // TODO: Redirect to login page
                }

                if (error.response.status == 403) {
                    console.log("Acceso no autorizado")
                }
            }
            console.log("Error: " + error)
            console.log(error.response)
            return Promise.reject(error)
        })


    }

}