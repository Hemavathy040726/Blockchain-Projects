async function main() {
   const HelloBlockchain = await ethers.getContractFactory("helloblockchain");

   // Start deployment, returning a promise that resolves to a contract object
   const hello_world = await HelloBlockchain.deploy("Hello World blockchain !");   
   console.log("Contract deployed to address:", hello_world.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });