import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";

const InitialScreen = () => {
  const { tryLocalSignIn } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignIn();
  }, []);

  return null;
};

export default InitialScreen;
