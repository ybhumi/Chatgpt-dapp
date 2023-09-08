const hre = require('hardhat')

async function main(){
    const NAME = "GPTMembership";
    const SYMBOL = "GPT";

    const GPTMembership = await hre.ethers.getContractFactory("GPTMembership");
    const gptMembership = await GPTMembership.deploy(NAME, SYMBOL); //contructor arguments

    await gptMembership.deployed();

    console.log("GPTMembership",gptMembership.address);
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
})