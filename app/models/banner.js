// Example model


module.exports = function(sequelize, DataTypes) {

  var Banner = sequelize.define('Banner', {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    text: DataTypes.STRING,
    src: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // example on how to add relations
        // Banner.hasMany(models.Comments);
      }
    }
  });

  return Banner;
};