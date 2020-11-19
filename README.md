<!--
SPDX-FileCopyrightText: 2020 Andrew Lunde <andrew.lunde@sap.com>

SPDX-License-Identifier: Apache-2.0
-->
[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/cloud-sfsf-benefits-ext)](https://api.reuse.software/info/github.com/SAP-samples/cloud-sfsf-benefits-ext)

# Using SaaS Provisioning Service to develop a SaaS Multitenant Application on SAP Cloud Platform in the Cloud Foundry Environment

## Warning

This code sample is deprecated in favor of a CAP based example.  
See [cloud-cap-multitenancy](https://github.com/SAP-samples/cloud-cap-multitenancy)

## Description

This repository contains a sample reference application that explains the steps involved in using SaaS Provisioning service to develop and deploy a SaaS (software-as-a-service) multitenant business application on SAP Cloud Platform, Cloud Foundry environment.

Through this sample application you will understand:
* How does a provider serve a SaaS application using the SaaS Provisioning service.
* How can a consumer subscribe to a multitenant SaaS application.

## Requirements

* [Cloud Foundry Command Line Interface (CF CLI) tools](https://github.com/cloudfoundry/cli)
* [A subaccount on SAP Cloud Platform running on the Cloud Foundry environment](https://account.hana.ondemand.com)
* [Access to SAP Web IDE Full stack version](https://help.sap.com/viewer/product/SAP_Web_IDE/CF/en-US?task=discover_task).
* [Developing a Multi Target Application (MTAR) on SAP Cloud Platform Cloud Foundry](https://help.sap.com/viewer/825270ffffe74d9f988a0f0066ad59f0/CF/en-US/a71bf8281254489ea8be6e323199b304.html)

## Download and Installation

To install the app, you must clone the code from this [Github](https://github.com/SAP-samples/cloud-cf-multitenant-saas-provisioning-sample) repository and deploy the application on your SAP Cloud Platform sub-account, running on the Cloud Foundry environment.

For complete setup instructions, see the [Download and Installation](./Download_and_Installation_Instructions.md) instructions.

## Known Issues
There are no known issues to this sample application. If you encounter any issues, please reach out to us through the details highlighted in the How to obtain support section

## How to obtain support
The intended purpose of this application is to illustrate the multitenancy capability of SAP Cloud Platform running on Cloud Foundry environment.

In case of an issue please create an issue on Github.
Please follow the steps mentioned [here](https://help.github.com/articles/creating-an-issue/) to create an Issue.

## License

Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.

This file is licensed under the SAP Sample Code License, except as noted otherwise in the [LICENSE file](./LICENSES/Apache-2.0.txt)

# Build Command:
```
mkdir -p mta_archives ; mbt build -p=cf -t=mta_archives --mtar=mthello.mtar
```

# Deploy Command:
```
cf deploy mta_archives/mthello.mtar -f
```

# Subsequent Build+Deploy Commands:
```
mbt build -p=cf -t=mta_archives --mtar=mthello.mtar ; cf deploy mta_archives/mthello.mtar -f
```

# Undeploy Command:
```
cf undeploy multitenant_helloworld_node -f --delete-services
```
