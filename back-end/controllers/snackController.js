// DEPENDENCIES
const express = require("express");
const snacksRoute = express.Router();
const { getAllSnacks,
        deleteSnack } = require('../queries/snacks');

snacksRoute.get('/', async (_, response) => {
    const allSnacks = await getAllSnacks();

    allSnacks.length !== 0 
    ? response.status(200).json(allSnacks)
    : response.status(404).json({ error: 'all snacks data is empty' });
});

snacksRoute.delete('/:id', async (request, response) => {
    const deletedSnack = await deleteSnack(request.params.id);

    deletedSnack.id 
    ? response.status(200).json(deletedSnack)
    : response.status(404).json({ error: `couldn't delete snack at id: ${request.params.id}` });
});

module.exports = snacksRoute;