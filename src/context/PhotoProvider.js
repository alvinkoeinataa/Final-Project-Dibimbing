import React, { createContext, useEffect, useState } from "react";
import { createPost, getUser, deletePost, UpdatePost, loginApi, registerApi } from "./api/index.js";

export const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
  const [dataPhoto, setDataPhoto] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [roleUser, setRoleUser] = useState("");
  const [token, setToken] = useState("");

  const fetchPhoto = async () => {
    try {
      const Photos = await getPhoto();
      setDataPhoto(Photos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  return (
    <PhotoContext.Provider
      value={{
        setDataPhoto,
        getUser,
        dataPhoto,
        createPost,
        deletePost,
        UpdatePost,
        loginApi,
        registerApi,
        isLogin,
        setIsLogin,
        roleUser,
        setRoleUser,
        token,
        setToken,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};
