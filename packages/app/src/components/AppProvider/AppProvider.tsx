import React, { ReactNode, FC, useState, useEffect } from 'react';
import { auth } from '../../config/firebase';
export const AppContext = React.createContext(null);

type Props = {
  children: ReactNode;
};

export const AppProvider: FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    console.log();
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return <AppContext.Provider value={{ currentUser }}>{children}</AppContext.Provider>;
};
