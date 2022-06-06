import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [businesses, setBusinesses] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "pomona",
        },
      });
      setBusinesses(response.data.businesses);
      setErrorMessage("");
    } catch (e) {
      setErrorMessage("Something went wrong");
    }
  };
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, businesses, errorMessage];
};
