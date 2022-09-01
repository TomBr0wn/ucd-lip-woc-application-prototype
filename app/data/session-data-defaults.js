/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // Insert values here
  'defendant-name': 'Mary Richards',
  'defendant-address': '24 Acacia Drive, London, SW1 9HA',
  'defendant-correct-address': '24 Acacia Drive, London, SW1 H9A',
  // 'new-postcode': 'SW1 H8X',
  'defendant-phone-number': '07824999612',
  'recovery-amount': '0',
  'county-judgment-amount': '510',
  'high-judgment-amount': '2700',
  'mega-judgment-amount': '600',
  'legal-fee': '2.25',
  
  'claimant-name': 'Jan Clark'
  

}
