const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
    try {
        const allSnacks = await db.any(`
            SELECT * FROM snacks
        `);
        return allSnacks;
    } catch(error) {
        return error;
    };
};

// Get id
const getOneSnack = async (id) => {
    try{
        const oneSnack = await db.one("SELECT * FROM snacks WHERE id=$1", id)
        return oneSnack
    }catch (err) {
        return err
    }
}


// Create a new snack-log
const createSnack = async (snack) => {

    const {name, fiber, protein, added_sugar, is_healthy, image} = snack
    
        try{
            const newSnack = await db.one("INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",[name, fiber, protein, added_sugar, is_healthy, image])
            return newSnack
        }catch(err) {
            return err
        }
    
    }

const deleteSnack = async (id) => {
    try {
        const deletedSnack = await db.one(`
            DELETE FROM snacks
            WHERE id=$1
            RETURNING *
        `, id);
        return deletedSnack;
    } catch (error) {
        return error;
    };
};

module.exports = {
    getAllSnacks,
    deleteSnack,
    getOneSnack,
    createSnack,
};
