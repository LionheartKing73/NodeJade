// Example model


module.exports = function(sequelize, DataTypes) {

  var Service = sequelize.define('Service', {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    text: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // example on how to add relations
        // Service.hasMany(models.Comments);
      }
    }
  });

  return Service;
};