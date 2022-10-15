import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import app from "../../firebase/firebase.init";

const Home = () => {
  const auth = getAuth(app);
  const githubProvider = new GithubAuthProvider();
  const handelGithubLogIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="App">
        <button onClick={handelGithubLogIn}>Sing Up with github</button>
      </div>
    </div>
  );
};

export default Home;
