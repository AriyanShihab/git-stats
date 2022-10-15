import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import "./App.css";
import app from "./firebase/firebase.init";

function App() {
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
    <div className="App">
      <button onClick={handelGithubLogIn}>Sing Up with github</button>
    </div>
  );
}

export default App;
