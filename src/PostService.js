import axios from 'axios';
const url='api/posts/'
class PostService{
    static async getPosts(){
        const res=await axios.get(url);
        const data=await res.data;
        return data
    }

    static createPost(item){  
        return axios.post(url,{item})
    }

    static deletePost(item){
        return axios.delete(`${url}${item}`)
    }
}

export default PostService;