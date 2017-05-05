module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define("Burgers", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            valudate: {
                len: [1, 140]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
    return Burgers;
};