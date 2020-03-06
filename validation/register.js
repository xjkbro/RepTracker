const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.pass = !isEmpty(data.pass) ? data.pass : "";
    data.confirmPass = !isEmpty(data.confirmPass) ? data.confirmPass : "";

    //Name checks
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }
    //Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    //Password checks
    if (Validator.isEmpty(data.pass)) {
        errors.pass = "Password field is required";
    }
    if (Validator.isEmpty(data.confirmPass)) {
        errors.confirmPass = "Confirm Password field is required";
    }
    if (!Validator.isLength(data.pass, { min: 6, max: 30 })) {
        errors.pass = "Password must be at least 6 characters";
    }
    if (!Validator.equals(data.pass, data.confirmPass)) {
        errors.confirmPass = "Password must match";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};