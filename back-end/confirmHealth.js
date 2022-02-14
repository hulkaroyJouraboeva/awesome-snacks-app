const confirmHealth = ({ added_sugar, protein, fiber }) => {
    if ((protein >= 5 && added_sugar < 5) || (fiber >= 5 && added_sugar < 5)) {
        return true;
    } else if (typeof protein !== 'number' || typeof fiber !== 'number' || typeof added_sugar !== 'number') {
        return null;
    }
    return false;
};

module.exports = confirmHealth;
