const { MongoClient } = require('mongodb')

let dbConnection
let uri = 'mongodb+srv://<username>:<password>@cluster0.ig9h3.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
      .then(client => {
        dbConnection = client.db()
        return cb()
      })
      .catch(err => {
        console.log(err)
        return cb(err)
      })
  },
  getDb: () => dbConnection
}