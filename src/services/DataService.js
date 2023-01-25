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
  mapPrice(price){
     if(price >= 1000){
      let howManyThousands = String(Math.round(price / 1000)).length;
      price = String(price).slice(0,howManyThousands) + ',' + String(price).slice(howManyThousands);

      return price
     }
    return String(price)
  },
  mapChange(change) {
    if(change > 0) return '+' + String(change)
    if(change < 0) return String(change)

  },
  async getCurrencies() {
    let res = await axios.get("http://localhost:8000/");
    // let res = await axios.get("https://express-server-coinmarketcap-api-production.up.railway.app/");
    let currenciesPrices = [(res.data.data.BTC.quote.USD.price).toFixed(2),
                            (res.data.data.ETH.quote.USD.price).toFixed(2),
                            (res.data.data.ADA.quote.USD.price).toFixed(2)];
    currenciesPrices = currenciesPrices.map(this.mapPrice)
    let currenciesChanges = [(res.data.data.BTC.quote.USD.percent_change_24h).toFixed(2),
                             (res.data.data.ETH.quote.USD.percent_change_24h).toFixed(2),
                             (res.data.data.ADA.quote.USD.percent_change_24h).toFixed(2)];
    currenciesChanges = currenciesChanges.map(this.mapChange)
    // return res; //returning whole fetched object
    return [currenciesPrices, currenciesChanges];//returning only needed data
  }
}