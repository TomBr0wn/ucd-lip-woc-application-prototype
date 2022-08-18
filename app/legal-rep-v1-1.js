const express = require("express");
const router = express.Router();

// var folder = "current"

// Routes files for URLs/folders
// router.get('/user-type', function(req, res) {
//   res.render(folder + '/user-type');
// });




//////////// CHECK CLAIMANT ADDRESS /////////////////////

router.post("/check-claimant-address", function(req, res) {
    // Make a variable and give it the value from 'check-address
    var knowAddress = req.session.data["claimant-address"];
    console.log(knowAddress);
    // Check whether feeHelp
    if (knowAddress == "no") {
        // Send user to next page
        res.redirect("claimant-address-unknown");
    }
    if (knowAddress == "yes") {
        // Send user to next page
        res.redirect("claimant-address-confirmed");
    }
});


//////////// CHECK CLAIMANT PHONE NUMBER /////////////////////

router.post("/check-claimant-phone-number", function(req, res) {
    // Make a variable and give it the value from 'check-phone-number
    var knowPhoneNum = req.session.data["claimant-phone"];
    console.log(knowPhoneNum);
    // Check whether feeHelp
    if (knowPhoneNum == "no") {
        // Send user to next page
        res.redirect("claimant-phone-number-unknown");
    }
    if (knowPhoneNum == "yes") {
        // Send user to next page
        res.redirect("claimant-phone-number-confirmed");
    }
});


//////////// CHECK DEFENDANT ADDRESS /////////////////////

router.post("/check-address", function(req, res) {
    // Make a variable and give it the value from 'check-address
    var knowAddress = req.session.data["defendant-address"];
    console.log(knowAddress);
    // Check whether feeHelp
    if (knowAddress == "no") {
        // Send user to next page
        res.redirect("defendant-address-unknown");
    }
    if (knowAddress == "yes") {
        // Send user to next page
        res.redirect("defendant-address-confirmed");
    }
});

module.exports = router;