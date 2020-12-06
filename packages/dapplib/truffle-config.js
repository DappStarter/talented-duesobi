require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remain modify grace opinion sudden spread'; 
let testAccounts = [
"0xe94aa73e98bdd5bf1ead8b2abf2a44abe3fe4260b82b513e4400967b1bd35c6d",
"0x5561dc4333be5accb67d063e798edde97980d52b43aa624ff911f129713a30d7",
"0x992f8b0fc49768170a49306bbc336d16f41a0cefe5c369e502231faa599173c1",
"0xd99f2a150306b3f58dbe9b6865043a0194cbda290350b1063fe1336d45b154ba",
"0x71474c2fc96465593de01dcf4c46ca07dce25d3b70a82f87537b4b27a47ef876",
"0x7ac3b4ef6c1da399385a81524b59fff02a85fcd7cb0208b6055f6fe0615ae0a9",
"0x6159fa477c7687fdc6a5fd115dfa21bcadaa3895b6887def67ef69a694047e5a",
"0x891f743549424d161655012e2fabf613fbd9b198c229bf783c4a019e43268818",
"0xd9e3fdfb57f06ace95c696feaf83f649f5c651ad23d5da9165bff53b53046ad2",
"0xf5d2ef0d7b6e04d9a40d2f5cf8a1584b191a4514bb2aea421c4348538972c930"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
