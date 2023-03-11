const mongoose = require('mongoose');


const {db : {host, use, pass, name, port}} = require("./../configs/config.mongo")
const connectString = `mongodb://${host}:${port}/${name}`

class Database {
  constructor() {
    this.connect()
  }

  //connect 

  connect(type = "mongodb") {

    if (1 == 1) {
      mongoose.set('debug', true);
      mongoose.set('debug', { color: true });
    }
    mongoose.connect(connectString,{maxPoolSize:50})
      .then(_ => console.log('Connected MongoDB Success PRO'))
      .catch(err => console.log(`Error connecting MongoDB : ${err.message}`))
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database()
    }

    return Database.instance
  }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb



// //Khai bao MongoDB
// const mongoose = require('mongoose')
// const conn = mongoose.createConnection('mongodb://localhost:27017/shopDEV', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

// conn.on('connected', function () {
//   console.log('Ket noi MongoDB thanh cong')
// })

// conn.on('disconnected', function () {
//   console.log('Huy ket noi')
// })

// conn.on('error', function (err) {
//   console.log(JSON.stringify(err));
// })

// process.on('SIGINT', async () => {
//   await conn.close()
//   process.exit(0)
// })

// module.exports = conn;