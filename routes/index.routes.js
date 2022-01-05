const express = require("express");

const router = express.Router();

const { Answer } = require("../db/models");
const { downloadResource } = require("../utils/util");

router.get("/", (req, res) => {
  return res.render("index");
});

router.get("/thank_you", (req, res) => {
  return res.render("thank_you");
});

router.get("/results", (req, res) => {
  return res.render("results");
});

router.get("/download", async (req, res) => {
  const fields = [
    "email",
    "gender",
    "age",
    "education",
    "aware_of_olap",
    "acquiring_information",
    "searching_gathering_information",
    "analyzing_information",
    "delivery_of_information",
    "identify_problems_and_bottlenecks",
    "provide_analysis_of_the_best_and_the_worst",
    "provide_analysis_of_products",
    "provide_analysis_of_employees",
    "provide_analysis_of_regions",
    "perform_adhoc_analysis",
    "schemas_are_complicated_to_implement_and_administer",
    "cannot_have_a_large_number_of_dimensions_in_a_single_olap_cube",
    "transactional_data_cannot_be_accessed_with_olap_system",
    "modification_in_olap_cube_needs_full_update_of_the_cube",
    "olap_has_helped_in_effective_decision_support",
    "possible_solutions_to_challengers_using_olap",
  ];

  const data = await Answer.findAll();

  return downloadResource(res, "answers.csv", fields, data);
});

module.exports = router;
