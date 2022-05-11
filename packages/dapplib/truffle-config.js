require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grace seek surge trip film birth oval upgrade kidney clinic orient type'; 
let testAccounts = [
"0x3b6e3d4bd62826163652a285aa9bdcb26b3a04e3da630209816cee7d63c6ef70",
"0xaa859a3d88b2b3979cb21c0f664e0cc392327f8045ffcc8c4c1ed4e473d63756",
"0xf01680a615d41296fcbc4c923487370b1f6c8b4b03ab7983389086104ba69092",
"0xda08bce65673a63abd957d10e59cdffbe15069c810a9d50428cc29f8ebff2abc",
"0xeb8b28468ee92edd298fe7c5bce3b4ddd7ce5e014bf69a5861f2a7b69feffa87",
"0x230408717c719d6946d9dc1bd572194c13585bf0b4a723ce1947823a1949ee91",
"0x9272a272fe43700bae1b2cfa81dc0e570742574d9e78df4ec39a39797079116f",
"0xf7524ca7259534cd3f45d67bb2e118a79b7ee60ae15730fc1945fa07685cb097",
"0x6ccaa85fbce6d72c3a9128d28fd175233a53baaf6a129bfab4a8b9ddac96fabd",
"0x7eb70a95e09c7dbec64946b58a4e5512ad6ada93a15102382ab53ab152c2bcef"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


