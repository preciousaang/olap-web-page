const express = require("express");
const { Answer } = require("../db/models");

const router = express.Router();

router.get("/", (req, res) => {
  return res.send("Hullo");
});

router.get("/question", (req, res) => {
  return res.render("olap-form");
});

router.post("/submit_question", async (req, res) => {
  try {
    const answer = await Answer.create({
      email: req.body.email,
      gender: req.body.gender,
      education: req.body.education,
      age: req.body.age,
      aware_of_olap: req.body.aware_of_olap,
      acquiring_information: req.body.acquiring_information,
      searching_gathering_information: req.body.searching_gathering_information,
      analyzing_information: req.body.analyzing_information,
      delivery_of_information: req.body.delivery_of_information,
      identify_problems_and_bottlenecks:
        req.body.identify_problems_and_bottlenecks,
      provide_analysis_of_the_best_and_the_worst:
        req.body.provide_analysis_of_the_best_and_the_worst,
      provide_analysis_of_products: req.body.provide_analysis_of_products,
      provide_analysis_of_employees: req.body.provide_analysis_of_employees,
      provide_analysis_of_regions: req.body.provide_analysis_of_regions,
      perform_adhoc_analysis: req.body.perform_adhoc_analysis,
      schemas_are_complicated_to_implement_and_administer:
        req.body.schemas_are_complicated_to_implement_and_administer,
      cannot_have_a_large_number_of_dimensions_in_a_single_olap_cube:
        req.body.cannot_have_a_large_number_of_dimensions_in_a_single_olap_cube,
      transactional_data_cannot_be_accessed_with_olap_system:
        req.body.transactional_data_cannot_be_accessed_with_olap_system,
      modification_in_olap_cube_needs_full_update_of_the_cube:
        req.body.modification_in_olap_cube_needs_full_update_of_the_cube,
      olap_has_helped_in_effective_decision_support:
        req.body.olap_has_helped_in_effective_decision_support,
      possible_solutions_to_challengers_using_olap:
        req.body.possible_solutions_to_challengers_using_olap,
    });
    return res.redirect("/thank_you");
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
});

module.exports = router;
