import axios from "axios";

export const fetchItemAPI = (itemId) => {
  const response = axios.get(`http://localhost:4000/items/${itemId}`);
  console.log(response);
  return response.data;
};

export const fetchItemListAPI = () => {
  const response = axios.get(`http://localhost:4000/items`);
  return response.data;
};

export const removeItemAPI = (itemId) => {
  const response = axios.delete(`http://localhost:4000/items/${itemId}`);
  return response;
};

// CREATE UPDATE API
export async function postData(postData) {
  console.log("postData", postData);
  // UPDATE API
  if (postData.data.id !== "" && postData.data.id !== null) {
    const response = await axios.put(
      `http://localhost:4000/data/` + postData.data.id, //data.json 의 id
      {
        id: postData.data.id,
        itemName: parseInt(postData.data.blocks),
        price: parseInt(postData.data.transactions),
        description: parseInt(postData.data.transactions),
        file: parseInt(postData.data.transactions),
      }
    );
    return response;
  }

  // CREATE API
  else {
    const response = await axios.post(`http://localhost:4000/data`, {
      id: postData.data.id,
      itemName: parseInt(postData.data.blocks),
      price: parseInt(postData.data.transactions),
      description: parseInt(postData.data.transactions),
      file: parseInt(postData.data.transactions),
    });
    return response;
  }
}
