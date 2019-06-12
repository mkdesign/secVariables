require('dotenv').config()

console.log('Variables from .bash_profile : ')
console.log(process.env.BITCOIN_PR_KEY)
console.log(process.env.BITCOIN_ADDR)
console.log(process.env.ETHEREUM_PR_KEY)
console.log(process.env.ETHEREUM_ADDR)
console.log(process.env.MNEMONIC)

console.log('Variables from .env_file : ')
console.log(process.env.PORT)
console.log(process.env.DB_URL)
console.log(process.env.DB_PASSWORD)
console.log(process.env.API_LEY)
console.log(process.env.ADMIN_PASSWORD)
