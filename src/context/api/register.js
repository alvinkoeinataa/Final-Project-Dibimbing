import axios from "axios";

export const registerApi = async (myName, myUserName, myEmail, myPass, myRepeatPass, myRole, myProfileUrl, myPhoneNumber, myBio, myWebsite) => {
  try {
    const body = {
      name: myName,
      username: myUserName,
      email: myEmail,
      password: myPass,
      passwordRepeat: myRepeatPass,
      role: myRole,
      profilePictureUrl: myProfileUrl,
      phoneNumber: myPhoneNumber,
      bio: myBio,
      website: myWebsite,
    };
    const respon = await axios.post(`https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/register`, body, {
      headers: {
        apiKey: "c7b411cc-0e7c-4ad1-aa3f-822b00e7734b",
      },
    });
    return respon;
  } catch (error) {
    return error;
  }
};
