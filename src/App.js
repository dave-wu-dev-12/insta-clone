import React, { useState, useEffect } from "react";
import "./App.css";
import { database, auth } from "./firebase";
import Header from "./Header";
import Post from "./Post";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import Signup from "./Signup";
import ImageUpload from "./ImageUpload";

function App() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    database
      .collection("posts")
      .orderBy("time", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })))
      );

    return () => {};
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // user logged in
      if (authUser) {
        // this is for setting the user in the app after a page reload
        setUser(authUser);
        console.log("user logged in");
      } else {
        //user log out
        setUser(null);
        console.log("user logged out");
      }
    });
    return () => {};
  }, []);

  const openModal = (type) => {
    if (type == "login") {
      setModalType("login");
    } else {
      setModalType("signup");
    }
    setModal(true);
  };

  const modalDismissed = () => {
    // clear fields
    setUsername("");
    setPassword("");
    setEmail("");
    setModal(false);
  };

  const modalSubmit = (event) => {
    event.preventDefault();
    if (modalType == "signup") {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((resp) => {
          return resp.user.updateProfile({
            displayName: email,
          });
        })
        .catch((e) => alert(e.message));
    } else {
      auth
        .signInWithEmailAndPassword(email, password)
        .catch((e) => alert(e.message));

      setModal(false);
    }
  };

  const logoutApp = () => {
    auth.signOut();
  };

  return (
    <div className="App">
      <Header
        username={user?.displayName ? user.displayName : ""}
        openModal={openModal}
        logoutApp={logoutApp}
      />

      <Modal
        open={modal}
        onClose={modalDismissed}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Signup
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          email={email}
          setEmail={setEmail}
          modalSubmit={modalSubmit}
          modalType={modalType}
        />
      </Modal>

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

      {user?.displayName && <ImageUpload username={user.displayName} />}
    </div>
  );
}

export default App;
