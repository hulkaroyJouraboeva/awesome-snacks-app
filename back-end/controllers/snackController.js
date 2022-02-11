// DEPENDENCIES
const express = require("express");
const snacksRoute = express.Router();
const { getAllSnacks, getOneSnack, deleteSnack } = require("../queries/snacks");

snacksRoute.get('/', async (_, response) => {
  const allSnacks = await getAllSnacks();
  
  allSnacks.length !== 0 
  ? response.status(200).json(allSnacks)
  : response.status(404).json({ error: 'all snacks data is empty' });
});

// Get a specific snack by id
snacksRoute.get("/:id", async (req, res) => {

  const { id } = req.params;
  const snack = await getOneSnack(id);

  if (snack.id) {
    res.status(200).json(snack);
  } else {
    res.status(500).json({ error: `${id} does not exist` });
  }

});

  snacksRoute.delete('/:id', async (request, response) => {
    const deletedSnack = await deleteSnack(request.params.id);

    deletedSnack.id 
    ? response.status(200).json(deletedSnack)
    : response.status(404).json({ error: `couldn't delete snack at id: ${request.params.id}` });
  });

module.exports = snacksRoute;