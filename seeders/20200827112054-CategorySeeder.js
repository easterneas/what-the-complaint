'use strict';

const { query } = require("express");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return queryInterface.bulkInsert('Categories', [
      {name: 'Complaint - Amenities', createdAt: new Date(), updatedAt: new Date() },
      {name: 'Complaint - Facilities', createdAt: new Date(), updatedAt: new Date() },
      {name: 'Request - Internet', createdAt: new Date(), updatedAt: new Date() },
      {name: 'Request - Additional Facilities', createdAt: new Date(), updatedAt: new Date() },
      {name: 'Request - Other', createdAt: new Date(), updatedAt: new Date() },
    ])
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
