// DEPENDENCIES
const express = require("express");
const snacksRoute = express.Router();


const { getAllSnacks, getOneSnack, deleteSnack, createSnack, updateSnack } = require("../queries/snacks");


snacksRoute.get('/', async (_, response) => {
    const allSnacks = await getAllSnacks();

    allSnacks.length !== 0 
    ? response.status(200).json(allSnacks)
    : response.status(404).json({ error: 'all snacks data is empty' });
});


// Get a specific snack by id
snacksRoute.get("/:id", async (request, response) => {

  const { id } = request.params;
  const snack = await getOneSnack(id);

  if (snack.id) {
    response.status(200).json(snack);
  } else {
    response.status(500).json({ error: `${id} does not exist` });
  }

});


// Post
snacksRoute.post("/", async (request, response) => {
  const newSnack = await createSnack(request.body)
  response.status(200).json(newSnack)
})


  snacksRoute.delete('/:id', async (request, response) => {
    const deletedSnack = await deleteSnack(request.params.id);

    deletedSnack.id 
    ? response.status(200).json(deletedSnack)
    : response.status(404).json({ error: `couldn't delete snack at id: ${request.params.id}` });
});

snacksRoute.put('/:id', async (request, response) => {
    const updatedSnack = await updateSnack(request.params.id, request.body);

    updatedSnack.id
    ? response.status(200).json(updatedSnack)
    : response.status(404).json({ error: `we're sorry we couldn't update the data` });
});

module.exports = snacksRoute;