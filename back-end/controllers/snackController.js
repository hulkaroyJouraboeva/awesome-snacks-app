// DEPENDENCIES
const express = require("express");
const snacksRoute = express.Router();
const { getAllSnacks, getOneSnack } = require("../queries/snacks");


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

module.exports = snacksRoute;
