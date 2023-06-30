const mongoose = require('mongoose')
// const mongoDbClient = require("mongodb").MongoClient
var password = encodeURIComponent("S885313#h");
// const mongoURI=`mongodb+srv://gofood:<password>@cluster0.ar82mbg.mongodb.net/?retryWrites=true&w=majority`
// const mongoURI=`mongodb+srv://gofood:${password}@cluster0.ar82mbg.mongodb.net/gofoodmern?retryWrites=true&w=majority`;
// mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
const mongoURI=`mongodb://gofood:${password}@ac-tzgcfrk-shard-00-00.ar82mbg.mongodb.net:27017,ac-tzgcfrk-shard-00-01.ar82mbg.mongodb.net:27017,ac-tzgcfrk-shard-00-02.ar82mbg.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-8nmune-shard-0&authSource=admin&retryWrites=true&w=majority`
module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
        if (err) console.log("---" + err)
        else {
            
           
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray(async function (err, data) {
                // console.log(data);
                const categoryCollection = await mongoose.connection.db.collection("foodCategory");
              
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);
                    console.log(Catdata)

                })
            });
            // listCollections({name: 'food_items'}).toArray(function (err, database) {
            // });
            //     module.exports.Collection = database;
            // });
        }
    })
};
