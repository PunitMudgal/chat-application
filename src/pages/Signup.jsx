import React, { useState } from "react";
import photo from "../images/pic-upload.png";
import "../styles/signup.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthUser } from "../context/AuthContext";
import { db, storage,auth } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function Signup() {
  // const [state, setState] = useState();
  const [err, setErr] = useState(false);
  const { user } = AuthUser();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const displayName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const file = event.target[3].files[0];
    console.log(email, password);

    try {
      setErr("");
      // signUp(email, password);
      const response = await createUserWithEmailAndPassword(auth, email, password);
console.log('response--', response)
      // photo upload to the storage
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // console.log("file available at", downloadURL);
            await updateProfile(response.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChat", response.user.uid), {
              savedChats: [],
            });
          });
        }
      );

      console.log("user -->", response.user);
      navigate("/home");
    } catch (error) {
      setErr(true);
      console.log("errormessage", error);
    }
  };

  return (
    <div className="signup-full">
      <div className="signup-content box-shadow2">
        <span>That's App</span>
        <span>SignUp</span>
        {err ? <p className="error-message">Something Went Wrong</p> : null}

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <input
            type="file"
            style={{ display: "none" }}
            name="file"
            id="file"
          />
          <label htmlFor="file">
            <img src={photo} alt="input-file" />
            Add Avatar
          </label>
          <button type="submit" className="signup-btn">
            Sign up
          </button>
        </form>
        <p>
          Already user? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
