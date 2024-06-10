import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const getProduct = async () => {
   try {
      const response = await axios.get(`${apiBaseUrl}/product`);
      return response.data;
   } catch (error) {
      throw new Error("An error has occurred");
   }
};

export const postProduct = async (body) => {
   try {
      const response = await axios.post(`${apiBaseUrl}/product`, body, {
         headers: {
            "Content-Type": "application/json",
         },
      });
      return response.data;
   } catch (error) {
      throw new Error("An error has occurred");
   }
};

export const editProduct = async (id, body) => {
   try {
      const response = await axios.put(`${apiBaseUrl}/product/${id}`, body, {
         headers: {
            "Content-Type": "application/json",
         },
      });
      return response.data;
   } catch (error) {
      throw new Error("An error has occurred");
   }
};

export const deleteProduct = async (id) => {
   try {
      const response = await axios.delete(`${apiBaseUrl}/product/${id}`);
      return response.data;
   } catch (error) {
      throw new Error("An error has occurred");
   }
};
