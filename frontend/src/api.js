import axios from 'axios'
const url = "/api/post"

export default class API {
    static async getAllPosts() {
        const res = await axios.get(url);
        return res.data;
    }

    static async getPostById(id) {
        const res = await axios.get(`#{url}/${id}`);
        return res.data;
    }

    static async createPost(post) {
        const res = await axios.get(url , post);
        return res.data
}
}