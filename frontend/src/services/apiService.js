// currently not using this but preserving it in case we want to restructure later

// src/services/api.js
import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000";

const api = axios.create({
  baseURL: BASE_URL,
});

const handleError = (error) => {
  console.error("API Error:", error);
  throw error;
};

const apiService = {
  // ... other methods

  getTest: async () => {
    try {
      const response = await api.get("/api");
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  getCategoriesAndFields: async () => {
    try {
      const response = await api.get("/api/get-categories-and-fields");
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  getCategories: async () => {
    try {
      const response = await api.get("/api/get-categories");
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  searchWildlifeNames: async (query, categoryIds = []) => {
    try {
      // Construct the parameters object
      let params = new URLSearchParams();
      params.append("query", query);

      // If categoryIds are provided, append each one to the params
      categoryIds.forEach((id) => params.append("category_id", id));

      // Make the GET request with axios, including the parameters
      const response = await axios.get(`/api/search-wildlife-names/`, {
        params: params,
      });
      return response.data; // Return the data from the response
    } catch (error) {
      handleError(error);
    }
  },

  getAllWildlife: async () => {
    try {
      const response = await api.get(`/api/get-wildlife`);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  getWildlifeById: async (wildlifeId) => {
    try {
      const response = await api.get(`/api/get-wildlife-by-id/${wildlifeId}`);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  getImagesByWildlifeId: async (wildlifeId) => {
    console.log("getImagesByWildlifeId", wildlifeId);
    try {
      const response = await api.get(`/api/get-images-by-wildlife-id/${wildlifeId}`);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  getImagebyImageId: async (imageId) => {
    try {
      const response = await api.get(`/api/get-image-by-image-id/${imageId}`);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },
  createCategory: async (form) => {
    try {
      const response = await api.post(`/api/create-category/`, form);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  createField: async (form) => {
    try {
      const response = await api.post(`/api/create-field/`, form);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  editField: async (form) => {
    try {
      const response = await api.post(`/api/edit-field/`, form);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },


  createWildlife: async (form) => {
    try {
      const response = await api.post(`/api/create-wildlife/`, form);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  addImage: async(form) => {
    console.log("addImage", form);
    try {
      const response = await api.post(`/api/add-image/`, form);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  setThumbnail: async (form) => {
    try {
      const response = await api.put(`/api/set-thumbnail`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  editWildlife: async (form) => {
    try {
      const response = await api.post(`/api/edit-wildlife`, form);
      for (const pair of form.entries()) {
        console.log(`${pair[0]}:`, pair[1]);
      }
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },
};

export default apiService;
