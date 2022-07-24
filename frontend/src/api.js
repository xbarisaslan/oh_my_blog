import axios from 'axios'
const url = 'http://localhost:5000/api/post'

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
