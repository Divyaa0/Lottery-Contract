import HDWalletProvider from '@truffle/hdwallet-provider';
import Web3 from 'web3';
import compile from './compile.js';



const ABI = compile.interface;
const byte = compile.bytecode;

// hdWalletProvide == which acc to unlock & use as source of ether for deploying contract
const provider = new HDWalletProvider('crystal humble throw lift library mammal surprise impact own wasp tooth inject',
    'https://sepolia.infura.io/v3/ea876502aa804931b6b095b3e47e3166')

//web3 instance enable to interact with any n/w (send ether,deploy contract,update contract)
const web3 = new Web3(provider);

const deployFunc = async () => {
    try {
        console.log("inside deploy function")
        // lis of all acounts
        const accounts = await web3.eth.getAccounts();
        console.log("🚀 ~ file: deploy.js:21 ~ accounts:", accounts)
        // console.log("account using" , accounts[0])

        // use web3 instace->ethereum module ->/
        const result = await new web3.eth.Contract(JSON.parse(ABI))
            .deploy({ data: byte, arguments: [] })
            .send({ gas: '1000000', from: accounts[0] })


        console.log("contract deployement : " ,result.options.address)
        console.log("contract is deployed to the address : " , result.options.address)

    }
    catch (error) {
        console.log("error", error)
    }

};
deployFunc()
provider.engine.stop();

// print transaction and check explorer
