import "./post.css";
export function Post({ title, author, content, following}) {//needs to be wrapped in one tag
   
  const button = !following ? (
    <button>Follow</button>
  ) : (
    <button>Unfollow</button>
);


return (
<div className="card">
    <h1>{title}</h1>
    <h3>By: {author}</h3>
    {button}
    <p>{content}</p>
</div>
);
}
//named export
//More conditional rendering.
 {/* {following && <button>Unfollow</button>} */}
    {/* {following ? <button>Unfollow</button> : <button>Follow</button>} */}
 