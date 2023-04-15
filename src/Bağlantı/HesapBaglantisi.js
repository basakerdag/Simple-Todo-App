import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';

const HesapBaglantisi = createContext();

export const HesapBaglantisiProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleIlegiris = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
  };

  const cikis = () => {
      signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <HesapBaglantisi.Provider value={{ googleIlegiris, cikis, user }}>
      {children}
    </HesapBaglantisi.Provider>
  );
};

export const UserAuth = () => {
  return useContext(HesapBaglantisi);
};