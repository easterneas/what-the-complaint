'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ComplaintHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ComplaintHistory.belongsTo(models.Complaint)
    }
  };
  ComplaintHistory.init({
    notes: DataTypes.STRING,
    complaintId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ComplaintHistory',
  });
  return ComplaintHistory;
};