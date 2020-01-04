import axios from "axios";

class BeerApi {
  constructor() {
    this.apiUrl = process.env.REACT_APP_BEER_API_URL;
    if (process.env.REACT_APP_CORS_PROXY_URL) {
      this.apiUrl = process.env.REACT_APP_CORS_PROXY_URL + this.apiUrl;
    }
    console.log(process.env.REACT_APP_CORS_PROXY_URL);
    this.apiKey = process.env.REACT_APP_BEER_API_KEY;
    this.apiClient = axios.create({
      baseURL: this.apiUrl,
      timeout: 6000,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  getList(page) {
    return this.apiClient
      .get("/beers", {
        params: {
          key: this.apiKey,
          p: page
        }
      })
      .then(response => {
        return response;
      })
      .catch(error => {
        console.log(error);
      });
  }
  getSingle(beerId) {
    return this.apiClient
      .get(`/beer/${beerId}`, {
        params: {
          key: this.apiKey
        }
      })
      .then(response => {
        return response;
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default BeerApi;