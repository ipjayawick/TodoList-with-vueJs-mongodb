import axios from 'axios';
const url='http://localhost:5000/api/posts/'
class PostService{
    static getPosts(){
        // return new Promise((resolve,reject)=>{
        //     try {
        //         const res=axios.get(url);
        //         const data=res.data;
        //         resolve(
        //             data.map(post=>({
        //                 ...post
        //             }))
        //         );
        //     } catch (error) {
        //         reject(error);
        //     }
        // })
    }
    static createPost(){
        
    }

    static deletePost(){
        
    }
}

export default PostService;