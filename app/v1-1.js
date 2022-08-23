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
	if (recoveryMethod == "warrant or writ") {
		// Send user to next page
		res.redirect("choose-warrant-or-writ-of-control");
	}
	if (recoveryMethod == "attachment earnings order") {
		// Send user to next page
		res.redirect("attachment-of-earnings-order");
	}
	if (recoveryMethod == "third party debt") {
		// Send user to next page
		res.redirect("third-party-debt-order");
	} else {
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
	if (feeHelp == "No") {
		// Send user to next page
		res.redirect("has-defendant-paid-any");
	}
	if (feeHelp == "Yes") {
		// Send user to next page
		res.redirect("help-with-fees-yes");
	} else {
		// Send user to trade page
		res.redirect("#");
	}
});

////////// Outstanding balance ///////////////
router.post("/paid-any", function (req, res) {
	var feeHelp = req.session.data["paid-already-amount"];
	var judgmentAmount = req.session.data["judgment-amount"];
	var outstandingBalance = parseInt(judgmentAmount) - parseInt(feeHelp);
	console.log(feeHelp);
	console.log(judgmentAmount);
	console.log(outstandingBalance);
    req.session.data.outstandingBalance == outstandingBalance;
	// Send user to..
	// res.redirect("how-much-do-you-want-to-recover");
	res.redirect("paying-installments");

	// var hasPaid = req.session.data["paid-any"];
	// if (hasPaid == "Yes") {
	// 	console.log(hasPaid);
	// 	// Send user to next page
	// 	res.redirect({outstandingBalance: req.session.data.outstandingBalance},"are-you-paying-installments");
	// } else {
	// 	// Send user to trade page
	// 	res.redirect({outstandingBalance: req.session.data.outstandingBalance},"are-you-paying-installments");
	// }
});


////////// CHECK IF TO PAY BY INSTALLMENTS ///////////////////
router.post("/installments", function (req, res) {
    
	var payInstallments = req.session.data["pay-by-installments"];
	console.log(payInstallments);
	// Check whether installments
	if (payInstallments == "No") {
		// Send user to next page
		res.redirect("how-much-do-you-want-to-recover");
	}
	if (payInstallments == "Yes") {
		// Send user to next page
		res.redirect("paying-installments-manual-check");
	} else {
		// Send user to trade page
		res.redirect("#");
	}
    
});


// Run this code when a form is submitted to 'help-with-fees'
router.post("/is-recovery-greater-than-judgement", function (req, res) {
	// Make a variable and give it the value from 'help-with-fees'
	var judgementAmount = parseInt(req.session.data["judgement-amount"]);
	var recoveryAmount = parseInt(req.session.data["recovery-amount"]);
	console.log(judgementAmount);
	console.log(recoveryAmount);
	// Check whether feeHelp
	if (recoveryAmount > 5000) {
		// Send user to next page
		res.redirect("cannot-apply-for-warrant-of-control");
	} else {
		// Send user to trade page
		res.redirect("are-you-claiming-additional-costs");
	}
});

// Run this code when a form is submitted to 'check-address
router.post("/check-address", function (req, res) {
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

// Run this code when a form is submitted to 'check-phone-number
router.post("/check-phone-number", function (req, res) {
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




// router.post("/defendant-phone-number-confirmed", function (req, res) {	
// });



////////////////// NO PHONE NUMBER IN SYSTEM /////////////////////
router.post("/no-phone-number", function (req, res) {
	var noPhoneNumber = req.session.data["no-defendant-phone"];
	console.log(noPhoneNumber);
	// Check whether feeHelp
	if (noPhoneNumber == "No") {
		// Send user to next page
		res.redirect("bailiff-risk-questions");
	}
	if (noPhoneNumber == "Yes") {
		// Send user to next page
		res.redirect("defendant-phone-number-unknown");
	}
});



router.post("/change-amount", function (req, res) {
	var newAmount = req.session.data["try-to-recover"];
	console.log(newAmount);
});

router.post("/is-manual-check-needed", function (req, res) {
	var judgementAmount = parseInt(req.session.data["judgement-amount"]);
	var recoveryAmount = parseInt(req.session.data["recovery-amount"]);
	console.log(judgementAmount);
	console.log(recoveryAmount);
	if (recoveryAmount <= judgementAmount) {
		res.redirect("manual-check-no");
	} else {
		res.redirect("manual-check-yes");
	}
});

module.exports = router;
