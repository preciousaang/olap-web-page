"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Answer.init(
    {
      email: DataTypes.STRING,
      gender: DataTypes.STRING,
      age: DataTypes.STRING,
      education: DataTypes.STRING,
      aware_of_olap: DataTypes.STRING,
      acquiring_information: DataTypes.STRING,
      searching_gathering_information: DataTypes.STRING,
      analyzing_information: DataTypes.STRING,
      delivery_of_information: DataTypes.STRING,
      identify_problems_and_bottlenecks: DataTypes.STRING,
      provide_analysis_of_the_best_and_the_worst: DataTypes.STRING,
      provide_analysis_of_products: DataTypes.STRING,
      provide_analysis_of_employees: DataTypes.STRING,
      provide_analysis_of_regions: DataTypes.STRING,
      perform_adhoc_analysis: DataTypes.STRING,
      schemas_are_complicated_to_implement_and_administer: DataTypes.STRING,
      cannot_have_a_large_number_of_dimensions_in_a_single_olap_cube:
        DataTypes.STRING,
      transactional_data_cannot_be_accessed_with_olap_system: DataTypes.STRING,
      modification_in_olap_cube_needs_full_update_of_the_cube: DataTypes.STRING,
      olap_has_helped_in_effective_decision_support: DataTypes.STRING,
      possible_solutions_to_challengers_using_olap: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Answer",
    }
  );
  return Answer;
};
