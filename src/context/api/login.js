import axios from "axios";
import React from "react";

export const loginApi = async (myEmail, myPassword) => {
  try {
    const body = {
      email: myEmail,
      password: myPassword,
    };
    const respon = await axios.post(`https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/login`, body, {
      headers: {
        apiKey: "c7b411cc-0e7c-4ad1-aa3f-822b00e7734b",
      },
    });
    return respon.data;
  } catch (error) {
    return error.response.data;
  }
};
