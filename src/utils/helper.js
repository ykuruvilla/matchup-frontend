import axios from "axios";

const getCoordinates = (postcode) => {
  axios.get(`http://api.postcodes.io/postcodes/${postcode}`).then();
};
