import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
// import avatar from '../images/user.jpg'
import "../styles/search.css";
import {
  query,
  collection,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { IoClose } from "react-icons/io5";
import { AuthUser } from "../context/AuthContext";

function Search() {
  const [userName, setUserName] = useState("");
  const [searchedUser, setSearchedUser] = useState(null);
  const [error, setError] = useState(false);
  const { user } = AuthUser();

  const handleSearch = async () => {
    // from firebase qurry docs
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setSearchedUser(doc.data());
      });
    } catch (error) {
      setError(true);
    }
  };

  const handleSearchKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const combinedId =
      user.uid > searchedUser.uid
        ? user.uid + searchedUser.uid
        : searchedUser.uid + user.uid;
    try {
      const resp = await getDoc(doc(db, "chats", combinedId));

      if (!resp.exists()) {
        // create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: searchedUser.uid,
            displayName: searchedUser.displayName,
            photoURL: searchedUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", searchedUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      setError(true);
    }
     setUserName("") 
     setSearchedUser(null);
  };

  return (
    <div className="search">
      <div className="search-form">
        <input
          type="search"
          onKeyDown={handleSearchKey}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Search User"
          input={userName}
        />
        {searchedUser ? (
          <IoClose
            onClick={() => setSearchedUser(null)}
            style={{ cursor: "pointer" }}
            size={25}
          />
        ) : (
          <FaSearch
            size={25}
            onClick={handleSearch}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
      {error && <p>user not found!</p>}
      {searchedUser && (
        <div className="search-result" onClick={handleSelect}>
          <img src={searchedUser.photoURL} alt="avatar" />
          <div className="search-result-userName">
            <p>{searchedUser.displayName}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
