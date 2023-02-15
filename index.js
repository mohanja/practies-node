import  express  from "express";
import { request } from "express";
import {MongoClient} from "mongodb"
import * as dotenv from 'dotenv';
import cors from "cors"


export const app = express();
dotenv.config()

const PORT =4000;
const MONGO_URL=process.env.MONGO_URL;
export const client = new MongoClient(MONGO_URL); 
await client.connect();
 console.log("Mongo is connected !!!");

const PET=[{
 " id":"11",
  "image": "https://th.bing.com/th/id/OIP.GeAA0FO3BwC_e47_zDJbsgHaEo?pid=ImgDet&rs=1",
  "amount": "1000",
  "name": "doper dog",
 "location" : "salem,tamilnadu",
"gender":"mael"
},
{  " id":"12",
"image": "https://th.bing.com/th/id/OIP.GeAA0FO3BwC_e47_zDJbsgHaEo?pid=ImgDet&rs=1",
"amount": "1000",
"name": "doper dog",
"location" : "salem,tamilnadu",
"gender":"mael"
}, {
  " id":"13",
  "image": "https://th.bing.com/th/id/OIP.GeAA0FO3BwC_e47_zDJbsgHaEo?pid=ImgDet&rs=1",
  "amount": "1000",
  "name": "doper dog",
 "location" : "salem,tamilnadu",
"gender":"mael"
}]
const HOSPITAL=[{
"id":"21",
  "image":"https://th.bing.com/th/id/R.5f0b3923ac8b581d0679f7bd6e8a6cc2?rik=FQq2cMQaEPytIA&riu=http%3a%2f%2fmcleodvet.com%2fimages%2fMVH-2017-exterior-big.jpg&ehk=QtyzjTBzurOlmo3fqtXqUF%2bnJM9teQW4br8M8beYd5s%3d&risl=&pid=ImgRaw&r=0",
  "number":"123455667",
  "name":"muthu wetnery hospigital",
  "location":"salem,thubai",
  "doctor":"https://th.bing.com/th/id/OIP.ZpVunDDzxPZxFy630A-3RwHaLH?pid=ImgDet&rs=1",
  "doctorname":"Tomcuros",
  "position":"CEO"
},
{"id":"22",
"image":"https://th.bing.com/th/id/R.5f0b3923ac8b581d0679f7bd6e8a6cc2?rik=FQq2cMQaEPytIA&riu=http%3a%2f%2fmcleodvet.com%2fimages%2fMVH-2017-exterior-big.jpg&ehk=QtyzjTBzurOlmo3fqtXqUF%2bnJM9teQW4br8M8beYd5s%3d&risl=&pid=ImgRaw&r=0",
"number":"123455667",
"name":"muthu wetnery hospigital",
"location":"salem,thubai",
"doctor":"https://th.bing.com/th/id/OIP.ZpVunDDzxPZxFy630A-3RwHaLH?pid=ImgDet&rs=1",
"doctorname":"Tomcuros",
"position":"CEO"
},{
  "id":"23",
  "image":"https://th.bing.com/th/id/R.5f0b3923ac8b581d0679f7bd6e8a6cc2?rik=FQq2cMQaEPytIA&riu=http%3a%2f%2fmcleodvet.com%2fimages%2fMVH-2017-exterior-big.jpg&ehk=QtyzjTBzurOlmo3fqtXqUF%2bnJM9teQW4br8M8beYd5s%3d&risl=&pid=ImgRaw&r=0",
  "number":"123455667",
  "name":"muthu wetnery hospigital",
  "location":"salem,thubai",
  "doctor":"https://th.bing.com/th/id/OIP.ZpVunDDzxPZxFy630A-3RwHaLH?pid=ImgDet&rs=1",
  "doctorname":"Tomcuros",
  "position":"CEO"
}]
const SHOP=[ {
 " id":"31",
  "image":"https://media.blogto.com/articles/3fd2-20151120-pet-stores-toronto.jpg?cmd=resize_then_crop&quality=70&w=2048&height=1365",
 " number":"123455667",
  "name":"pet zone",
  "location":"salem,thubai",
  "oner":"https://th.bing.com/th/id/OIP.9TMUOEmAAb1XaHo4XuBbmAHaLH?pid=ImgDet&w=474&h=711&rs=1",
  "onername":"dilli",
 " position":"CEO"
},
{" id":"32",
"image":"https://media.blogto.com/articles/3fd2-20151120-pet-stores-toronto.jpg?cmd=resize_then_crop&quality=70&w=2048&height=1365",
" number":"123455667",
"name":"pet zone",
"location":"salem,thubai",
"oner":"https://th.bing.com/th/id/OIP.9TMUOEmAAb1XaHo4XuBbmAHaLH?pid=ImgDet&w=474&h=711&rs=1",
"onername":"dilli",
" position":"CEO"
},
{" id":"33",
"image":"https://media.blogto.com/articles/3fd2-20151120-pet-stores-toronto.jpg?cmd=resize_then_crop&quality=70&w=2048&height=1365",
" number":"123455667",
"name":"pet zone",
"location":"salem,thubai",
"oner":"https://th.bing.com/th/id/OIP.9TMUOEmAAb1XaHo4XuBbmAHaLH?pid=ImgDet&w=474&h=711&rs=1",
"onername":"dilli",
" position":"CEO"
},
]
const METRIAL=[
  {"id":"41",
    "image":"https://th.bing.com/th/id/OIP.idGF8DFTIOckP71benjr9QHaE7?pid=ImgDet&rs=1",
   " number":"123455667",
   " name":"pet supplies plus",
    "location":"salem,thubai",
   " oner":"https://thumbs.dreamstime.com/b/young-man-8988275.jpg",
    "onername":"millar",
    "position":"CEO"
  },
   {"id":"42",
   "image":"https://th.bing.com/th/id/OIP.idGF8DFTIOckP71benjr9QHaE7?pid=ImgDet&rs=1",
  " number":"123455667",
  " name":"pet supplies plus",
   "location":"salem,thubai",
  " oner":"https://thumbs.dreamstime.com/b/young-man-8988275.jpg",
   "onername":"millar",
   "position":"CEO"
  },
  {"id":"43",
  "image":"https://th.bing.com/th/id/OIP.idGF8DFTIOckP71benjr9QHaE7?pid=ImgDet&rs=1",
 " number":"123455667",
 " name":"pet supplies plus",
  "location":"salem,thubai",
 " oner":"https://thumbs.dreamstime.com/b/young-man-8988275.jpg",
  "onername":"millar",
  "position":"CEO"
  }
]
 


app.use(express.json())

app.use(cors())


app.get("/",function (rrequest,response){
  response.send("WELCOME TO PETSHOP");

});

app.get("/pets", async function (request, response) {
  if (request.query.amount) {
    request.query.amount = +request.query.amount;
  }
  const pet = await client.db("shop").collection("PET").find(request.query).toArray();
  response.send(pet);

});
app.get("/hosptial", async function (request, response) {
  if (request.query.number) {
    request.query.number = +request.query.number;
  }
  const hosptial = await client.db('shop').collection('HOSPITAL').find(request.query).toArray();
  response.send(hosptial);

});
app.get("/shop", async function (request, response) {
  if (request.query.number) {
    request.query.number = +request.query.number;
  }
  const shop = await client.db('shop').collection('SHOP').find(request.query).toArray();
  response.send(shop);

});
app.get("/metrial", async function (request, response) {
  if (request.query.number) {
    request.query.number = +request.query.number;
  }
  const metrial = await client.db('shop').collection('METRIAL').find(request.query).toArray();
  response.send(metrial);

});
app.get("/pets/:id", async function (request, response) {
  const { id } = request.params;
  // console.log(request.params.id)  
  // const pet=PET.filter((pet)=>pet.id===id)
  const pet = await client.db('shop').collection('PET').findOne({ id: id });
  console.log(pet);
  pet ? response.send(pet) : response.send({ message: "pet is not founnd" });
});
app.get("/hosptial/:id", async function (request, response) {
  const { id } = request.params;
  // console.log(request.params.id)
  // const hosptial=HOSPITAL.filter((pet)=>pet.id===id)
  const hosptial = await client.db('shop').collection('HOSPITAL').findOne({ id: id });
  hosptial ? response.send(hosptial) : response.send({ message: "pet is not founnd" });
});
app.get("/shop/:id", async function (request, response) {
  const { id } = request.params;
  // console.log(request.params.id)
  // const shop=SHOP.filter((pet)=>pet.id===id)
  const shop = await client.db('shop').collection('SHOP').findOne({ id: id });
  shop ? response.send(shop) : response.send({ message: "pet is not founnd" });
});
app.get("/metrial/:id", async function (request, response) {
  const { id } = request.params;
  // console.log(request.params.id)
  // const metrial=METRIAL.filter((pet)=>pet.id===id)
  const metrial = await client.db('shop').collection('METRIAL').findOne({ id: id });
  metrial ? response.send(metrial) : response.send({ message: "pet is not founnd" });
});

app.post("/shop", async function (request, response) {
  const data = request.body;
  console.log(data);
  const result = await client.db('shop').collection('SHOP').insertMany(data);

  response.send(result);

});
app.post("/pets", async function (request, response) {
  const data = request.body;
  console.log(data);
  const result = await client.db('shop').collection('PET').insertMany(data);

  response.send(result);

});
app.post("/hosptial", async function (request, response) {
  const data = request.body;
  console.log(data);
  const result = await client.db('shop').collection('HOSPITAL').insertMany(data);

  response.send(result);

});
app.post("/metrial", async function (request, response) {
  const data = request.body;
  console.log(data);
  const result = await client.db('shop').collection('METRIAL').insertMany(data);

  response.send(result);

});
app.delete("/pets/:id", async function (request, response) {
  const { id } = request.params;
  // console.log(request.params.id)
  // const hosptial=HOSPITAL.filter((pet)=>pet.id===id)
  const result = await client.db('shop').collection('PET').deleteOne({ id: id });
  console.log(result);
  result.deletedCount > 0 ? response.send({ message: "delete succesfully" }) : response.status(404).send({ message: "pet is not founnd" });
});
app.delete("/hosptial/:id", async function (request, response) {
  const { id } = request.params;
  // console.log(request.params.id)
  // const hosptial=HOSPITAL.filter((pet)=>pet.id===id)
  const result = await client.db('shop').collection('HOSPITAL').deleteOne({ id: id });
  console.log(result);
  result.deletedCount > 0 ? response.send({ message: "delete succesfully" }) : response.status(404).send({ message: "hospital is not founnd" });
});
app.delete("/shop/:id", async function (request, response) {
  const { id } = request.params;
  // console.log(request.params.id)
  // const shop=SHOP.filter((pet)=>pet.id===id)
  const result = await client.db('shop').collection('SHOP').deleteOne({ id: id });
  console.log(result);
  result.deletedCount > 0 ? response.send({ message: "delete succesfully" }) : response.status(404).send({ message: "shop is not founnd" });
});
app.delete("/metrial/:id", async function (request, response) {
  const { id } = request.params;
  // console.log(request.params.id)
  // const shop=SHOP.filter((pet)=>pet.id===id)
  const result = await client.db('shop').collection('METRIAL').deleteOne({ id: id });
  console.log(result);
  result.deletedCount > 0 ? response.send({ message: "delete succesfully" }) : response.status(404).send({ message: "metrial is not founnd" });
});
app.put("/pets/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;
  // console.log(request.params.id)  
  // const pet=PET.filter((pet)=>pet.id===id)
  const result = await client.db('shop').collection('PET').updateOne({ id: id }, { $set: data });
  console.log(result);
  response.send(result);
});
app.put("/hosptial/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;
  // console.log(request.params.id)  
  // const pet=PET.filter((pet)=>pet.id===id)
  const result = await client.db('shop').collection('HOSPITAL').updateOne({ id: id }, { $set: data });
  console.log(result);
  response.send(result);
});
app.put("/shop/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;
  // console.log(request.params.id)  
  // const pet=PET.filter((pet)=>pet.id===id)
  const result = await client.db('shop').collection('SHOP').updateOne({ id: id }, { $set: data });
  console.log(result);
  response.send(result);
});
app.put("/metrial/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;
  // console.log(request.params.id)  
  // const pet=PET.filter((pet)=>pet.id===id)
  const result = await client.db('shop').collection('METRIAL').updateOne({ id: id }, { $set: data });
  console.log(result);
  response.send(result);
});


app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));



 