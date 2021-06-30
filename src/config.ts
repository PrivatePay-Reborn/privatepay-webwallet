let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl:typeof window !== 'undefined' && window.location ? window.location.href.substr(0,window.location.href.lastIndexOf('/')+1)+'api/' : 'https://wallet.privatepay.online/api/',
	trustedDaemonsAddresses:[
        'http://remote-node.privatepay.online:27445/'
    ],
    phpRelay: typeof window !== 'undefined' ? true : false,
    mainnetExplorerUrl: "https://explorer.privatepay.online/",
    mainnetExplorerUrlHash: "https://explorer.privatepay.online/tx/{ID}",
    mainnetExplorerUrlBlock: "https://explorer.privatepay.online/block/{ID}",
    testnetExplorerUrl: "http://testnet.privatepay.online/",
    testnetExplorerUrlHash: "http://testnet.privatepay.online/tx/{ID}",
    testnetExplorerUrlBlock: "http://testnet.privatepay.online/block/{ID}",
    testnet: false,
    coinUnitPlaces: 12,
    txMinConfirms: 10,
    txCoinbaseMinConfirms: 60,
    addressPrefix: 372101,
    subAddressPrefix: 29061,
    integratedAddressPrefix: 28549,
    addressPrefixTestnet: 33,
    integratedAddressPrefixTestnet: 34,
    subAddressPrefixTestnet: 73,
    feePerKB: new JSBigInt('400000000'),
    dustThreshold: new JSBigInt('1000000000'),
    defaultMixin: 12,
    idleTimeout: 30,
    idleWarningDuration: 20,
    coinSymbol: 'XPP',
    openAliasPrefix: "xpp",
    coinName: 'PrivatePay',
    coinUriPrefix: 'privatepay:',
    avgBlockTime: 60,
    maxBlockNumber: 500000000,
    donationAddresses: [
        '5qfrSvgYutM1aarmQ1px4aDiY9Da7CLKKDo3UkPuUnQ7bT7tr7i4spuLaiZwXG1dFQbkCinRUNeUNLoNh342sVaqTaWqvt8',
        '5nYWvcvNThsLaMmrsfpRLBRou1RuGtLabUwYH7v6b88bem2J4aUwsoF33FbJuqMDgQjpDRTSpLCZu3dXpqXicE2uSWS4LUP',
        '9ppu34ocgmeZiv4nS2FyQTFLL5wBFQZkhAfph7wGcnFkc8fkCgTJqxnXuBkaw1v2BrUW7iMwKoQy2HXRXzDkRE76Cz7WXkD'
    ]
};
