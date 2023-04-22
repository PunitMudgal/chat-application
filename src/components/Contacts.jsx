import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import "../styles/contact.css";
import { AuthUser } from "../context/AuthContext";
import { db } from "../firebase";
import {ChatContextUser} from '../context/ChatContext'

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const { user } = AuthUser();
  const {dispatch} = ChatContextUser()

  useEffect(() => {
    const getContacts = () => {
      const unsub = onSnapshot(doc(db, "userChats", user.uid), (doc) => {
        setContacts(doc.data());
      });
      return () => {
        unsub();
      };
    };
    user.uid && getContacts();
  }, [user.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="contact">
      {Object.entries(contacts)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div className="contact-card" key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
            <img src={chat[1].userInfo.photoURL} alt="avatar" />
            <div className="contact-card-userName">
              <p>{chat[1].userInfo.displayName}</p>
              <p>{chat[1].lastMessage?.text}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
