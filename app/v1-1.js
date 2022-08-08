const express = require("express");
const router = express.Router();

// var folder = "current"

// Routes files for URLs/folders
// router.get('/user-type', function(req, res) {
//   res.render(folder + '/user-type');
// });

// Run this code when a form is submitted to 'user-type'
router.post("/recovery-method", function (req, res) {
	// Make a variable and give it the value from 'recovery-method'
	var recoveryMethod = req.session.data["recovery-method"];
	console.log(recoveryMethod);
	// Check whether recoveryMethod
	if (recoveryMethod == "charging order") {
		// Send user to next page
		res.redirect("charging-order");
	}
	if (recoveryMethod == "writ of control") {
		// Send user to next page
		res.redirect("writ-of-control");
	}
	if (recoveryMethod == "attachment earnings order") {
		// Send user to next page
		res.redirect("attachment-of-earnings-order");
	}
	if (recoveryMethod == "third party debt") {
		// Send user to next page
		res.redirect("third-party-debt-order");
	}
	else {
		// Send user to trade page
		res.redirect("help-with-fees");
	}
});

// Run this code when a form is submitted to 'help-with-fees'
router.post("/had-help-with-fees", function (req, res) {
	// Make a variable and give it the value from 'help-with-fees'
	var feeHelp = req.session.data["help-with-fees"];
	console.log(feeHelp);
	// Check whether feeHelp
	if (feeHelp == "no") {
		// Send user to next page
		res.redirect("has-defendant-paid-any");
	} else {
		// Send user to trade page
		res.redirect("help-wth-fees");
	}
});

// Run this code when a form is submitted to 'help-with-fees'
router.post("/paid-any", function (req, res) {
	// Make a variable and give it the value from 'help-with-fees'
	var feeHelp = req.session.data["has-defendant-paid"];
	console.log(feeHelp);
	// Check whether feeHelp
	if (feeHelp == "no") {
		// Send user to next page
		res.redirect("defendant-paid-no");
	} else {
		// Send user to trade page
		res.redirect("has-defendant-paid-any");
	}
});


module.exports = router;
