const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
    try {
        const allSnacks = await db.any(`
            SELECT * FROM snacks;
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

module.exports = {
    getAllSnacks,
    getOneSnack,
};
