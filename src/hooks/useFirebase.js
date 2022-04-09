import { useEffect, useState } from "react"
import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);

const Googleprovider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({})

  const SinInGoogle = () => {
    signInWithPopup(auth, Googleprovider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user)
      })
      .catch(error => {

      })
  }
  const handelSinOut = () => {
    signOut(auth)
      .then(() => { })
  }

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [])

  return { user, SinInGoogle, handelSinOut }

}
export default useFirebase;