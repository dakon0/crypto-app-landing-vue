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
      price = price.toFixed(2);
      price = String(price).slice(0,howManyThousands) + ',' + String(price).slice(howManyThousands);
     }
     else if(price < 1) price = String(price.toFixed(4));
     else price = String(price.toFixed(2));
    return price
  },
  mapChange(change) {
    if(change > 0) return '+' + String(change);
    if(change < 0) return String(change);

  },
  async getCurrencies() {
    // let res = await axios.get("http://localhost:8000/");
    let res = await axios.get("https://express-server-coinmarketcap-api-production.up.railway.app/");
    let currenciesPrices = [(res.data.data.BTC.quote.USD.price),
                            (res.data.data.ETH.quote.USD.price),
                            (res.data.data.ADA.quote.USD.price)];
    currenciesPrices = currenciesPrices.map(this.mapPrice)
    let currenciesChanges = [(res.data.data.BTC.quote.USD.percent_change_24h).toFixed(2),
                             (res.data.data.ETH.quote.USD.percent_change_24h).toFixed(2),
                             (res.data.data.ADA.quote.USD.percent_change_24h).toFixed(2)];
    currenciesChanges = currenciesChanges.map(this.mapChange)
    return [currenciesPrices, currenciesChanges];//returning only needed data
  }
}