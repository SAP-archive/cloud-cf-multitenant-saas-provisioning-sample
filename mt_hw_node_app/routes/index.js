var express = require('express');
var router = express.Router();

/**
 * This is the default end-point when someone attempts to access the SaaS application.
 * We show a message to the logged in user.
 * Format of the message: Hello <logon name>; your tenant sub-domain is <consumer sub-domain>; your tenant zone id is <consumer tenant id>
 * The logon name will be specific to each user.
 * The tenant zone and sub domain will be the same for all users of one consumer(tenant).
 */
router.get('/', function(req, res, next) {
  var line1 = "Hello " + req.authInfo.userInfo.logonName;
  var line2 = "your tenant sub-domain is " + req.authInfo.subdomain;
  var line3 = "your tenant zone id is " + req.authInfo.identityZone;
  var responseMsg = line1 + "; " + line2 + "; " + line3;
  res.send(responseMsg);
});



//******************************** API Callbacks for multitenancy ********************************

/**
 * Request Method Type - PUT
 * When a consumer subscribes to this application, SaaS Provisioning invokes this API.
 * We return the SaaS application url for the subscribing tenant.
 * This URL is unique per tenant and each tenant can access the application only through it's URL.
 */
router.put('/callback/v1.0/tenants/*', function (req, res) {
  var consumerSubdomain = req.body.subscribedSubdomain;
  var tenantAppURL = "https:\/\/" + consumerSubdomain + "-mt-hw-ar-app." + "cfapps.eu10.hana.ondemand.com";
  res.status(200).send(tenantAppURL);
});

/**
 * Request Method Type - DELETE
 * When a consumer unsubscribes this application, SaaS Provisioning invokes this API.
 * We delete the consumer entry in the SaaS Provisioning service.
 */
router.delete('/callback/v1.0/tenants/*', function (req, res) {
  res.status(200);
});
//************************************************************************************************

module.exports = router;
