import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer a5qouBzOp7enHeh9MJQgxL3NaFy7RdEI5TlfBdwIZOHNXWQ0yfk4c5s69E_9BE-QIqQXLpenHs-wnlES3RYSo3KyAkPD3ZsP2qtWAQU8oMB4wCRiIyfKOX7bxx-cYnYx",
  },
});
