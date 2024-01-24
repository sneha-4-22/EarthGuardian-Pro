import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
     const unsub=onAuthStateChanged(auth,user=>{
        console.log('get user:', user);
        if(user){
            setUser(user);
        }else{
            setUser(null);
        }
     })
    return unsub;
  }, []);

  return {user}
}
