import axios from "axios";

export async function CloudinaryImages() {
  try {
    const response = await axios.get("https://ace-portfolio-resources.onrender.com/cloudinary/images/ConceptArtist");
    return response.data;
  } catch (error) {
    
    console.error("Error fetching Cloudinary images:", error);
    throw error; 
  }
}

export async function CloudinaryVideos() {
  try {
    const response = await axios.get("https://ace-portfolio-resources.onrender.com/cloudinary/images/Animations");
    return response.data;
  } catch (error) {
    
    console.error("Error fetching Cloudinary images:", error);
    throw error; 
  }
}