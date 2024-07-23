import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"

const BlogPost = () => {
    const [blog, setBlog ] = useState({})
    const params = useParams();

    useEffect (()  => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`)
        .then((data) => data.json())
        .then((data )=> setBlog(data));
  },[]);

  console.log (blog)

console.log(params);
if (blog === null) return <h2 className="text-2xl">Loading....</h2>
    
    return (
      
      <div className="w-full text-center border bg-lime-400 rounder-lg h-auto overflow-hidden p-28 shadow-2xl">
       
        
          <h2 className="text-2xl text-gray-600 mb-3 font-extrabold font">
            {blog.title}</h2>
          <p className="text-lg font-semibold">{blog.body}</p>


      </div>
    )
  }
  
  export default BlogPost;