import { app, client } from "../index";
import  express from "express";
const router=express.Router()
// app.use("/movies",moviesRouter)
// app.use("/user",userRouter)
router.post("/shop", async function (request, response) {
  const data = request.body;
  console.log(data);
  const result = await client.db('shop').collection('SHOP').insertMany(data);

  response.send(result);

});
router.post("/pets", async function (request, response) {
  const data = request.body;
  console.log(data);
  const result = await client.db('shop').collection('PET').insertMany(data);

  response.send(result);

});
router.post("/hosptial", async function (request, response) {
  const data = request.body;
  console.log(data);
  const result = await client.db('shop').collection('HOSPITAL').insertMany(data);

  response.send(result);

});
router.post("/metrial", async function (request, response) {
  const data = request.body;
  console.log(data);
  const result = await client.db('shop').collection('METRIAL').insertMany(data);

  response.send(result);

});
router.delete("/pets/:id", async function (request, response) {
  const { id } = request.params;
  // console.log(request.params.id)
  // const hosptial=HOSPITAL.filter((pet)=>pet.id===id)
  const result = await client.db('shop').collection('PET').deleteOne({ id: id });
  console.log(result);
  result.deletedCount > 0 ? response.send({ message: "delete succesfully" }) : response.status(404).send({ message: "pet is not founnd" });
});
router.delete("/hosptial/:id", async function (request, response) {
  const { id } = request.params;
  // console.log(request.params.id)
  // const hosptial=HOSPITAL.filter((pet)=>pet.id===id)
  const result = await client.db('shop').collection('HOSPITAL').deleteOne({ id: id });
  console.log(result);
  result.deletedCount > 0 ? response.send({ message: "delete succesfully" }) : response.status(404).send({ message: "hospital is not founnd" });
});
router.delete("/shop/:id", async function (request, response) {
  const { id } = request.params;
  // console.log(request.params.id)
  // const shop=SHOP.filter((pet)=>pet.id===id)
  const result = await client.db('shop').collection('SHOP').deleteOne({ id: id });
  console.log(result);
  result.deletedCount > 0 ? response.send({ message: "delete succesfully" }) : response.status(404).send({ message: "shop is not founnd" });
});
router.delete("/metrial/:id", async function (request, response) {
  const { id } = request.params;
  // console.log(request.params.id)
  // const shop=SHOP.filter((pet)=>pet.id===id)
  const result = await client.db('shop').collection('METRIAL').deleteOne({ id: id });
  console.log(result);
  result.deletedCount > 0 ? response.send({ message: "delete succesfully" }) : response.status(404).send({ message: "metrial is not founnd" });
});
router.put("/pets/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;
  // console.log(request.params.id)  
  // const pet=PET.filter((pet)=>pet.id===id)
  const result = await client.db('shop').collection('PET').updateOne({ id: id }, { $set: data });
  console.log(result);
  response.send(result);
});
router.put("/hosptial/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;
  // console.log(request.params.id)  
  // const pet=PET.filter((pet)=>pet.id===id)
  const result = await client.db('shop').collection('HOSPITAL').updateOne({ id: id }, { $set: data });
  console.log(result);
  response.send(result);
});
router.put("/shop/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;
  // console.log(request.params.id)  
  // const pet=PET.filter((pet)=>pet.id===id)
  const result = await client.db('shop').collection('SHOP').updateOne({ id: id }, { $set: data });
  console.log(result);
  response.send(result);
});
router.put("/metrial/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;
  // console.log(request.params.id)  
  // const pet=PET.filter((pet)=>pet.id===id)
  const result = await client.db('shop').collection('METRIAL').updateOne({ id: id }, { $set: data });
  console.log(result);
  response.send(result);
});

export default router; 