import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db } from './config'
import { COLLECTIONS } from '../constants/collections'

export const loginUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)

export const logoutUser = () => signOut(auth)

export const getUserRole = async (uid) => {
  const snap = await getDoc(doc(db, COLLECTIONS.USERS, uid))
  return snap.exists() ? snap.data().role : null
}

export const createUserWithRole = async (email, password, role, extra = {}) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password)
  await setDoc(doc(db, COLLECTIONS.USERS, user.uid), {
    uid: user.uid, email, role, createdAt: serverTimestamp(), ...extra,
  })
  return user
}
