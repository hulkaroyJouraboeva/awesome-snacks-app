// DEPENDENCIES
const confirmHealth  = require("../confirmHealth");
const express = require("express");
const snacksRoute = express.Router();
const { getAllSnacks, getOneSnack, deleteSnack, createSnack, updateSnack } = require("../queries/snacks");

snacksRoute.get('/', async (_, response) => {
  const allSnacks = await getAllSnacks();

  allSnacks.length !== 0 
  ? response.status(200).json({
    success: true,
    payload: allSnacks
  })
  : response.status(404).json({ error: 'all snacks data is empty' });
});

// Get a specific snack by id
snacksRoute.get("/:id", async (request, response) => {
  const { id } = request.params;
  const snack = await getOneSnack(id);
  
  if (snack.id) {
    response.status(200).json({
      success: true,
      payload: snack
    });
  } else {
    response.status(404).json({
      success: false,
      payload: 'not found'
    });
  };
});

// Post
snacksRoute.post("/", async (request, response) => {
  const temp = { ...request.body };
  temp.is_healthy = confirmHealth(temp);
  const newSnack = await createSnack(temp);
  
  if (newSnack.name && newSnack.image) {
    const nameArr = newSnack.name.split(' ');
    let formattedName = []
    for (const w of nameArr) {
      if (w.length >= 3) {
        formattedName.push(w[0].toUpperCase() + w.slice(1).toLowerCase())
      } else {
        formattedName.push(w)
      }
    }

    newSnack.name = formattedName.join(' ');
    newSnack.is_healthy = confirmHealth(newSnack);
    
    response.status(200).json({
      success: true,
      payload: newSnack
    });
    
  } else if (!newSnack.image) {
    newSnack.image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
    const formattedName = newSnack.name
    .split(' ')
    .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(' ');
    
    newSnack.name = formattedName;
    newSnack.is_healthy = confirmHealth(newSnack);
    
    response.status(200).json({
      success: true,
      payload: newSnack
    });
  } else {
    response.status(404).json({
      success: false,
      payload: 'not found'
    });
  };
});

snacksRoute.delete('/:id', async (request, response) => {
  const deletedSnack = await deleteSnack(request.params.id);

  deletedSnack.id 
  ? response.status(200).json({
    success: true,
    payload: deletedSnack
  })
  : response.status(404).json({
    success: false,
    payload: {
      id: undefined
    }
  });
});

snacksRoute.put('/:id', async (request, response) => {
    const updatedSnack = await updateSnack(request.params.id, request.body);

    updatedSnack.id
    ? response.status(200).json(updatedSnack)
    : response.status(404).json({ error: `we're sorry we couldn't update the data` });
});

module.exports = snacksRoute;