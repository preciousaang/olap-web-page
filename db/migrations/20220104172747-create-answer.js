"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Answers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      age: {
        type: Sequelize.STRING,
      },
      education: {
        type: Sequelize.STRING,
      },
      aware_of_olap: {
        type: Sequelize.STRING,
      },
      acquiring_information: {
        type: Sequelize.STRING,
      },
      searching_gathering_information: {
        type: Sequelize.STRING,
      },
      analyzing_information: {
        type: Sequelize.STRING,
      },
      delivery_of_information: {
        type: Sequelize.STRING,
      },
      identify_problems_and_bottlenecks: {
        type: Sequelize.STRING,
      },
      provide_analysis_of_the_best_and_the_worst: {
        type: Sequelize.STRING,
      },
      provide_analysis_of_products: {
        type: Sequelize.STRING,
      },
      provide_analysis_of_employees: {
        type: Sequelize.STRING,
      },
      provide_analysis_of_regions: {
        type: Sequelize.STRING,
      },
      perform_adhoc_analysis: {
        type: Sequelize.STRING,
      },
      schemas_are_complicated_to_implement_and_administer: {
        type: Sequelize.STRING,
      },
      cannot_have_a_large_number_of_dimensions_in_a_single_olap_cube: {
        type: Sequelize.STRING,
      },
      transactional_data_cannot_be_accessed_with_olap_system: {
        type: Sequelize.STRING,
      },
      modification_in_olap_cube_needs_full_update_of_the_cube: {
        type: Sequelize.STRING,
      },
      olap_has_helped_in_effective_decision_support: {
        type: Sequelize.STRING,
      },
      possible_solutions_to_challengers_using_olap: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Answers");
  },
};
