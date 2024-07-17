
import axios from 'axios';
import { base_url } from "@/base_url";

export const fetchUserDetails = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  }

  try {
    const response = await axios.get(`${base_url}/user/details`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const userDetails = response.data;
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    return userDetails;
  } catch (error) {
    console.error('Error fetching user details:', error);
    localStorage.removeItem('token')
    localStorage.removeItem('userDetails')
    localStorage.removeItem('bookingInfo')
    return null;
  }
};

export const getUserDetailsFromLocalStorage = () => {
  const userDetails = localStorage.getItem('userDetails');
  return userDetails ? JSON.parse(userDetails) : null;
};

export const updateUserWishlistInLocalStorage = (newUserDetails) => {
  if (newUserDetails) {
    localStorage.setItem('userDetails', JSON.stringify(newUserDetails));
  }
};
