import axios from "axios"

export default {
  async getEvents() {
    let res = await axios.get("http://localhost:8000/events");
    return res.data;
  },
  async getEventSingle(eventId) {
    let res = await axios.get("http://localhost:8000/events/" + eventId);
    return res.data;
  },
  async getCurrencies() {
    let res = await axios.get("http://localhost:8000/");
    // let res = await axios.get("https://express-server-coinmarketcap-api-production.up.railway.app/");
    let currenciesPrices = [(res.data.data.BTC.quote.USD.price).toFixed(2), (res.data.data.ETH.quote.USD.price).toFixed(2),(res.data.data.ADA.quote.USD.price).toFixed(2)];
    // console.log("ADA", res.data.data.ADA.quote.USD.price);
    // console.log("BTC", res.data.data.BTC.quote.USD.price);
    // console.log("ETH", res.data.data.ETH.quote.USD.price);
    // console.log(currenciesPrices);
    // return res; //returning whole fetched object
    return currenciesPrices;//returning only needed data
  }
}