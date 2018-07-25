import web3 from './web3v1'

function ContractSetup () {
  console.log("ver" + web3.version)
  let ContractObj = new web3.eth.Contract([{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"idToTask","outputs":[{"name":"ipfsHash","type":"string"},{"name":"childDoing","type":"address"},{"name":"parent","type":"address"},{"name":"completed","type":"bool"},{"name":"verified","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"task_id","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLatestTaskId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"parentToChildren","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getCorrespondingTask","outputs":[{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"address"},{"name":"","type":"bool"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"uint256"},{"indexed":true,"name":"parent","type":"address"}],"name":"TaskCreated","type":"event"},{"constant":false,"inputs":[{"name":"_ipfsHash","type":"string"}],"name":"addTask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"child","type":"address"}],"name":"addChildren","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_taskId","type":"uint256"}],"name":"doingATask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"}],"name":"completedATask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"}],"name":"verifyTask","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}],'0x7346371a1ad02a31e8b1ef076d2b1e29731fe8b7')
  return ContractObj
}

const contractInstance = ContractSetup()

export default contractInstance