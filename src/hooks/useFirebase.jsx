import { useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { fbAuth } from "../../firebase.config";

function useFirebase() {
  const [loading, setLoading] = useState(true)

  // # create user with email
  const fbCreateUser = async (email, password, displayName) => {
    setLoading(true)
    const credential = await createUserWithEmailAndPassword(fbAuth, email, password)
    await updateProfile(credential.user, {displayName})
    setLoading(false)
    return credential
  }
  
  // # sign in
  const fbSignIn = async (email, password) => {
    setLoading(true)
    const credential = await signInWithEmailAndPassword(fbAuth, email, password)
    setLoading(false)
    return credential
  }
  
  // # google sign in
  const fbGoogleSignIn = async () => {
    setLoading(true)
    const provider = new GoogleAuthProvider()
    const credential = await signInWithPopup(fbAuth, provider)
    setLoading(false)
    return credential
  }
  
  // # logout
  const fbSignOut = async () => {
    setLoading(true)
    await signOut(fbAuth)
    setLoading(false)
  }


  return { loading, fbCreateUser, fbSignIn, fbSignOut, fbGoogleSignIn }
}

export default useFirebase;