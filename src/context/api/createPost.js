import axios from "axios";

export const createPost = async (myImageUrl, myCaption) => {
  try {
    const body = {
      imageUrl: myImageUrl,
      caption: myCaption,
    };
    const respon = await axios.post(`https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/create-post`, body, {
      headers: {
        apiKey: "c7b411cc-0e7c-4ad1-aa3f-822b00e7734b",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1cnV0ZXJtdWRhQGdtYWlsLmNvbSIsInVzZXJJZCI6IjRkMWVlZmZmLTM3MDEtNGVmNC05YzlmLWUyNzkwOTEyMjQyZCIsInJvbGUiOiJnZW5lcmFsIiwiaWF0IjoxNjkyMjU3Njk0fQ.vnZ6w8TGMT4UekoUnJRXkMyzmpXgH-rCs4q_xY_bkSo`,
        "Content-Type": "application/json",
      },
    });

    console.log(respon);
  } catch (error) {
    console.log(error);
  }
};
