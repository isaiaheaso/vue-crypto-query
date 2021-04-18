let vueInstance = new Vue({
    el: '#vue-app',
    delimiters: ["|@","@|"],
    data: {
        searchQuery: '',
        searchQueryBad: '',
        searchQueryLoading: '',
        searchResults: [],
        popularCoins: [
            {
                "coinName": 'Bitcoin',
                "coinSymbol": 'BTC',
                "coinImage": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
                "coinEstablished": "January 2009",
                "coinWebsite": "bitcoin.org"
            },
            {
                "coinName": 'Ethereum',
                "coinSymbol": 'ETH',
                "coinImage": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
                "coinEstablished": "July 2015",
                "coinWebsite": "ethereum.org"
            },
            {
                "coinName": 'Litecoin',
                "coinSymbol": 'LTC',
                "coinImage": "https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580",
                "coinEstablished": "October 2011",
                "coinWebsite": "litecoin.org"
            },
            {
                "coinName": 'Dogecoin',
                "coinSymbol": 'DOGE',
                "coinImage": "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",
                "coinEstablished": "December 2013",
                "coinWebsite": "dogecoin.com"
            },
            {
                "coinName": 'Ripple',
                "coinSymbol": 'XRP',
                "coinImage": "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
                "coinEstablished": "January 2012",
                "coinWebsite": "ripple.com"
            },
            {
                "coinName": 'Chainlink',
                "coinSymbol": 'LINK',
                "coinImage": "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700",
                "coinEstablished": "June 2017",
                "coinWebsite": "chain.link"
            }
        ]
    },
    methods: {
        //fetch Crypto data with API
        getCrypto() {
            this.searchQueryLoading = "Loading..."
            this.searchQueryBad = ""
            axios({
                method: 'GET',
                url: `https://api.coingecko.com/api/v3/coins/${this.searchQuery}`,
            })
                .then((resp) => {
                    this.searchResults = resp.data;
                    this.searchQueryBad = '';
                    this.searchQuery = '';
                    this.searchQueryLoading = '';
                })
                .catch(() => {
                    console.error();
                    this.searchResults = [];
                    this.searchQueryBad = 'Invalid cryptocurrency name!'
                    this.searchQueryLoading = '';
                })
        },
        //convert query to lowercase for API compatibility
        lowerCaseQuery() {
            this.searchQuery = this.searchQuery.toLowerCase();
        }
    },
});