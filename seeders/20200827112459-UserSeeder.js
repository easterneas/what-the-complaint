'use strict';

const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)

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

    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Complaint',
        lastName: 'Admin',
        username: 'admin',
        password: bcrypt.hashSync('admin', salt),
        role: 'admin',
        phoneNumber: '4DM1N',
        email: 'admin@mail.com',
        gender: 'male',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Tukang',
        lastName: 'Complain',
        username: 'tukangcomplain',
        password: bcrypt.hashSync('adaaja', salt),
        role: 'customer',
        phoneNumber: 'c0mplainmulu',
        email: 'complaint@mail.com',
        gender: 'male',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
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
