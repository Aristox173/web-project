import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import User from "../models/user.ts";

const usersCollection = collection(db, "users");

export const getUsers = async (): Promise<User[]> => {
  const data = await getDocs(usersCollection);
  const result: User[] = data.docs.map((doc) => {
    const userData = doc.data();
    return new User(
      doc.id,
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.password
    );
  });
  return result;
};

export const deleteUser = async (id) => {
  const userDoc = doc(db, "users", id);
  await deleteDoc(userDoc);
};

export const createUser = async (firstName, lastName, email, password) => {
  let user = new User("0", firstName, lastName, email, password);
  await addDoc(usersCollection, {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
  });
};

export const editUser = async (id, firstName, lastName, email, password) => {
  let userE = new User(id, firstName, lastName, email, password);
  const user = doc(db, "users", id);
  const data = {
    id: userE.id,
    firstName: userE.firstName,
    lastName: userE.lastName,
    email: userE.email,
    password: userE.password,
  };
  await updateDoc(user, data);
};
