const axios = require('axios')

const getLatestCurrencyRate = async (req, res) => {
    const queryKey = Object.keys(req.query);
    try {
        const fetch_response = await axios.get(`https://api.exchangeratesapi.io/latest?${queryKey[0]}=${req.query[queryKey[0]]}&${queryKey[1]}=${req.query[queryKey[1]]}`)
        const response = fetch_response;
        const currency = req.query[queryKey[1]].split(',')
        const rates = currency.reduce((acc, str, i) => {
            acc[str] = response.data.rates[str]
            return acc
        }, {})

        console.log('rates >>>>>>>', rates)
        res.status(200).json({
            results: {
                base: response.data.base,
                date: response.data.date,
                rates: rates
            }
        }
        )
    } catch (err) {
        res.status(400).json({ message: err })
    }
}

module.exports = getLatestCurrencyRate