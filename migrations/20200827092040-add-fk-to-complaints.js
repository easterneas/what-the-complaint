'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      queryInterface.addColumn('Complaints', 'UserId', {
        type: Sequelize.INTEGER,
        references: {
          model:'Users',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      }),
      queryInterface.addColumn('Complaints', 'CategoryId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id'
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      })
    ])
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
      queryInterface.removeColumn('Complaints', 'UserId'),
      queryInterface.removeColumn('Complaints', 'CategoryId')
    ])
  }
};
