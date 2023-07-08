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
    // let res = await axios.get("http://localhost:3001/crypto-app//price-change");
    let res = await axios.get("https://davidko5-express.onrender.com/crypto-app/price-change");
    let currenciesPrices = [(res.data.data.BTC.quote.USD.price),
                            (res.data.data.ETH.quote.USD.price),
                            (res.data.data.ADA.quote.USD.price),
                            (res.data.data.XRP.quote.USD.price)];
    currenciesPrices = currenciesPrices.map(this.mapPrice)
    let currenciesChanges = [(res.data.data.BTC.quote.USD.percent_change_24h).toFixed(2),
                             (res.data.data.ETH.quote.USD.percent_change_24h).toFixed(2),
                             (res.data.data.ADA.quote.USD.percent_change_24h).toFixed(2),
                             (res.data.data.XRP.quote.USD.percent_change_24h).toFixed(2)*-1];
    currenciesChanges = currenciesChanges.map(this.mapChange)
    return [currenciesPrices, currenciesChanges];//returning only needed data
  },
  quotes2prices(quotes){
    return quotes.quote.USD.price;
  },
  async getHistoricals() {
    // let res = await axios.get("http://localhost:3001/crypto-app/historicals");
    let res = await axios.get("https://davidko5-express.onrender.com/crypto-app/historicals");
    let btc = res.data.data.BTC.quotes;
    btc = btc.map(this.quotes2prices);
    let eth = res.data.data.ETH.quotes;
    eth = eth.map(this.quotes2prices);
    let ada = res.data.data.ADA.quotes;
    ada = ada.map(this.quotes2prices);
    let xrp = res.data.data.XRP.quotes;
    xrp = xrp.map(this.quotes2prices);
    return [btc, eth, ada, xrp]
  }
}