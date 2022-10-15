// import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Routes";

// import app from "./firebase/firebase.init";

function App() {
  // const auth = getAuth(app);
  // const githubProvider = new GithubAuthProvider();
  // const handelGithubLogIn = () => {
  //   signInWithPopup(auth, githubProvider)
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
