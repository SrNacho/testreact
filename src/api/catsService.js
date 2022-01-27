import axios from "axios";

export const getCatsFacts = async () => {
  try {
    const response = await axios.get("https://catfact.ninja/fact");
    return response;
  } catch (error) {
    console.log(error);
  }
};
