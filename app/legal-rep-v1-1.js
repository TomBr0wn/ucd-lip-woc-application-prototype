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



// router.post("/is-manual-check-needed", function(req, res) {
//     var judgementAmount = parseInt(req.session.data["judgement-amount"]);
//     var recoveryAmount = parseInt(req.session.data["recovery-amount"]);
//     console.log(judgementAmount);
//     console.log(recoveryAmount);
//     if (recoveryAmount <= judgementAmount) {
//         res.redirect("manual-check-no");
//     } else {
//         res.redirect("manual-check-yes");
//     }
// })


module.exports = router;