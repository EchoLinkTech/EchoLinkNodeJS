// importing the package
var bip39 = require("bip39");
var hdkey = require('ethereumjs-wallet/hdkey');
var ProviderEngine = require("web3-provider-engine");
var WalletSubprovider = require('web3-provider-engine/subproviders/wallet.js');
var Web3Subprovider = require("web3-provider-engine/subproviders/web3.js");
var Web3 = require("web3");

//importing the wallet data
var mnemonic = "";//change here(metamask seed words)
var hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));

//extracting the address of deploy account
var wallet_hdpath = "m/44'/60'/0'/0/";
var wallet = hdwallet.derivePath(wallet_hdpath + "0").getWallet();//change here if required
console.log(wallet)
var address = "0x" + wallet.getAddress().toString("hex");
var accessToken = "";//change here(infura access token)
const FilterSubprovider = require('web3-provider-engine/subproviders/filters.js');

//Setting up the Rinkeby engine
var providerUrlRinkeby = "https://rinkeby.infura.io/"+accessToken+"/";
var engineRinkeby = new ProviderEngine();
engineRinkeby.addProvider(new WalletSubprovider(wallet, {}));
// const FilterSubprovider = require('web3-provider-engine/subproviders/filters.js');
engineRinkeby.addProvider(new FilterSubprovider());
engineRinkeby.addProvider(new Web3Subprovider(new Web3.providers.HttpProvider(providerUrlRinkeby)));
// network connectivity error
engineRinkeby.on('error', function(err) {
    // report connectivity errors
    console.error(err.stack);
});
engineRinkeby.start();


module.exports = {
  networks: {
    "rinkeby" : {
      network_id : 4,
      provider: engineRinkeby,
      from: address
    }
  }
};

