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


//////////// CHECK DEFENDANT PHONE NUMBER  /////////////////////

router.post("/check-phone-number", function(req, res) {
    // Make a variable and give it the value from 'check-phone-number
    var knowPhoneNum = req.session.data["defendant-phone"];
    console.log(knowPhoneNum);
    // Check whether feeHelp
    if (knowPhoneNum == "no") {
        // Send user to next page
        res.redirect("defendant-phone-number-unknown");
    }
    if (knowPhoneNum == "yes") {
        // Send user to next page
        res.redirect("defendant-phone-number-confirmed");
    }
});



//////////// HAS DEFENDANT PAID ANYTHING  /////////////////////

router.post("/paid-any", function(req, res) {
    // Make a variable and give it the value from 'help-with-fees'
    var feeHelp = req.session.data["defendant-paid-already"];
    console.log(feeHelp);
    // Check whether feeHelp
    if (feeHelp == "No") {
        // Send user to next page
        res.redirect("defendant-paid-no");
    } else {
        // Send user to trade page
        res.redirect("how-much-do-you-want-to-recover");
    }
});


//////////// IS RECOVERY > JUDGEMENT AMOUNT?  /////////////////////

router.post("/is-recovery-greater-than-judgement", function(req, res) {
    // Make a variable and give it the value from 'help-with-fees'
    var judgementAmount = parseInt(req.session.data["judgement-amount"]);
    var recoveryAmount = parseInt(req.session.data["recovery-amount"]);
    console.log(judgementAmount);
    console.log(recoveryAmount);
    // Check whether feeHelp
    if (recoveryAmount > judgementAmount) {
        // Send user to next page
        res.redirect("are-you-claiming-additional-costs");
    } else {
        // Send user to trade page
        res.redirect("bailiff-risk-assessment");
    }
});