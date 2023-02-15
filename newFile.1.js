import { app, client } from "./index";

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
