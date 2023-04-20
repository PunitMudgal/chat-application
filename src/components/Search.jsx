import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
// import avatar from '../images/user.jpg'
import "../styles/search.css";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Search() {
  const [userName, setUserName] = useState("");
  const [searchedUser, setSearchedUser] = useState(null);
  const [error, setError] = useState(false);

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

  return (
    <div className="search">
      <div className="search-form">
        <input
          type="search"
          onKeyDown={handleSearchKey}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Search User"
        />
        <FaSearch size={25} />
      </div>
      {error && <p>user not found!</p>}
      {searchedUser && (
        <div className="search-result">
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
