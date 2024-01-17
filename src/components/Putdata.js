// src/components/Putdata.js
import { set, ref } from "firebase/database";
import { database } from "../firebase";

const Putdata = (email, password) => {
  const dbRef = ref(database, "user/govind");
  set(dbRef, {
    email: email,
    password: password,
  })
    .then(() => {
      console.log("Data stored successfully");
    })
    .catch((error) => {
      console.error("Error storing data:", error);
    });
};

export default Putdata;
