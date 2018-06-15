## Deployment Instructions

1. Pull the repository code

2. run :

````
npm install
````

3. Open file `2_deploy_contracts.js` inside the `migrations` folder at root folder and perform the following changes:-

    `var echoLinkFoundation = "";`, pass the echolink foundation address inside the quotes " ".

    `var echoLinkContractAddress = "0xbaafa39e4ff21a54bf2ca861ad58131ebeaa3359";`, this is echolink contract address deployed at rinkeby. You can deploy new echolink contract and change the address inside the quotes " ", if you want.

4. Open file `truffle.js` inside the root folder and perform the following changes :-

    `var mnemonic = " "`, enter the seed word for the wallet, inside the quotes " "(the seed word is a combination of random words used to identify the wallet).

    `var wallet = hdwallet.derivePath(wallet_hdpath + "0").getWallet();` , instead of "0" in wallet_hdpath + "0", enter the index of the account in the wallet to be used for deployment. The first address in wallet has index 0, second account has index 1 and so on.

    `var accessToken = " "`, enter the access Token provided by infura on registration. [visit here and enter the details. On successful registration, a token will be provided which is to be entered as stated above]

5. To deploy the contract to rinkeby run :

    ````
    truffle deploy --network=rinkeby
    ````

6. build frontend: 
    ````
    npm run build
    ````

7. The frontend build is now in the folder build_webpack. To deploy it to firebase, follow the instructions at : https://firebase.google.com/docs/hosting/quickstart
