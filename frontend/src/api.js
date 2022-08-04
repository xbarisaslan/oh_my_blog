import axios from 'axios'
const url = '/api/post'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

export default class API {
    static async getAllPosts() {
        const res = await axios.get(url);
        return res.data;
    }

    static async getPostById(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }

    static async addPost(post) {
        const res = await axios.post(url , post);
        return res.data;
    }
}
