import axios from 'axios';

const BASE_URL = 'https://api.sampleapis.com/coffee';

export const fetchHotCoffee = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/hot`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching hot coffee:', error);
    throw error;
  }
};

export const fetchIcedCoffee = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/iced`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching hot coffee:', error);
    throw error;
  }
};

export const getCoffeeDetails = async (type, coffeeId) => {
  try {
    let response;
    if (type === 'hot') {
      response = await axios.get(`${BASE_URL}/coffee/hot/${coffeeId}`);
      console.log(response.data);
    } else if (type === 'iced') {
      response = await axios.get(`${BASE_URL}/coffee/iced/${coffeeId}`);
      console.log(response.data);
    } else {
      throw new Error('Invalid coffee type. Must be "hot" or "iced".');
    }
    const coffeeDetails = response.data.find(
      coffee => coffee.id === Number(coffeeId)
    );
    return coffeeDetails;
  } catch (error) {
    console.error(
      `Error fetching coffee details for ${type} ID ${coffeeId}:`,
      error
    );
    throw error;
  }
};
