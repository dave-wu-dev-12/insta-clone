import React, { useState, useEffect } from "react";
import "./App.css";
import database from "./firebase";
import Header from "./Header";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    database
      .collection("posts")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })))
      );

    return () => {};
  }, []);

  return (
    <div className="App">
      <Header />
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          avatarSrc={post.avatarSrc}
          userName={post.userName}
          location={post.location}
          imageUrl={post.imageUrl}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default App;
