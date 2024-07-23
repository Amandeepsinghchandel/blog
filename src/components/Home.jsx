import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Home = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data )=> setPosts(data));
},[]);

  return (
    <div>
      {posts.map((post) => {
        return (
          <li
            key={post.id}
            className=" flex flex-wrap text-blue-500 m-5 text-3xl text-center border border-red-400 bg-slate-400 rounded-lg p-5 hover:bg-red-400"
          >
           <Link to={`/posts/${post.id}`}> {post.title}</Link>
          </li>
        );
      })}
    </div>
  )
}

export default Home;