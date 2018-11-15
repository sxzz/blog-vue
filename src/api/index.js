import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = '/api/'

axios.interceptors.request.use(config => {
    if (config.method === 'post') {
        let formData = new FormData()
        Object.keys(config.data).forEach(key => formData.append(key, config.data[key]))
        config.data = formData
    }
    return config
})

const api = {
    posts() {
        return axios.post('graphql', {
            query: `{
                posts(
                    offset: 0,
                    row: 10,
                    tag: ""
                ){
                    max,
                    list{
                        title,
                        alias,
                        tags,
                        updated,
                        created,
                        content
                    }
                }
            }`
        }).then(res => res.data)
    },
    post(id) {
        return axios.post('graphql', {
            query: `{
                post(
                    alias: "${id}"
                ){
                    title,
                    alias,
                    tags,
                    updated,
                    created,
                    content
                }
            }`
        }).then(res => res.data)
    },
    archive() {
        return axios.post('graphql', {
            query: `{
                tags{
                    tag,
                    posts{
                        alias,
                        title,
                        created
                    }
                }
            }`
        }).then(res => res.data)
    },
    links() {
        return axios.post('graphql', {
            query: `{
                link{
                    content,
                    links{
                        title,
                        link,
                        description
                    }
                }
            }`
        }).then(res => res.data)
    },
    about() {
        return axios.get('about').then(res => res.data)
    }
}
Vue.prototype.$api = api

export default api