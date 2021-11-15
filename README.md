<!--
SPDX-FileCopyrightText: 2020 Andrew Lunde <andrew.lunde@sap.com>

SPDX-License-Identifier: Apache-2.0
-->

[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/cloud-sfsf-benefits-ext)](https://api.reuse.software/info/github.com/SAP-samples/cloud-sfsf-benefits-ext)

# Using SaaS Provisioning Service to develop a SaaS Multitenant Application on SAP Business Technology Platform in the Cloud Foundry Environment

## Warning

This code sample is deprecated in favor of a CAP based example. See [cloud-cap-multitenancy](https://github.com/SAP-samples/cloud-cap-multitenancy).

## Description

This repository contains a sample reference application that explains the steps involved in using SaaS Provisioning service to develop and deploy a SaaS (software-as-a-service) multitenant business application on SAP Business Technology Platform, Cloud Foundry environment.

Through this sample application you will understand:

- How does a provider serve a SaaS application using the SaaS Provisioning service.
- How can a consumer subscribe to a multitenant SaaS application.

## Requirements

- [Cloud Foundry Command Line Interface (CF CLI) tools](https://github.com/cloudfoundry/cli)
- [A subaccount on SAP Business Technology Platform running on the Cloud Foundry environment](https://account.hana.ondemand.com)
- [Access to SAP Web IDE Full stack version](https://help.sap.com/viewer/product/SAP_Web_IDE/CF/en-US?task=discover_task). -or- Business Application Studio
- [Developing a Multi Target Application (MTAR) on SAP Business Technology Platform Cloud Foundry](https://help.sap.com/viewer/825270ffffe74d9f988a0f0066ad59f0/CF/en-US/a71bf8281254489ea8be6e323199b304.html)

## Download and Installation

To install the app, you must clone the code from this [Github](https://github.com/SAP-samples/cloud-cf-multitenant-saas-provisioning-sample) repository and deploy the application on your SAP Business Technology Platform sub-account, running on the Cloud Foundry environment.

**Mandatory:** Please replace all occurances of **&lt;landscape&gt;** with the four character code (ex: eu10) that represents the landscape that you will be deploying into.

For complete setup instructions, see the [Download and Installation](./Download_and_Installation_Instructions.md) instructions.

### Build Command:

```
mbt build
```

### Deploy Command:

```
cf deploy mta_archives/multitenant_helloworld_node_1.0.0.mtar -f
```

### Undeploy Command:

```
cf undeploy multitenant_helloworld_node -f --delete-services
```

## Known Issues

There are no known issues to this sample application. If you encounter any issues, please reach out to us through the details highlighted in the How to obtain support section

## How to obtain support

The intended purpose of this application is to illustrate the multitenancy capability of SAP Business Technology Platform running on Cloud Foundry environment.

In case of an issue please create an issue on Github.
Please follow the steps mentioned [here](https://help.github.com/articles/creating-an-issue/) to create an Issue.

## License

Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0, except as noted otherwise in the [LICENSE file](./LICENSES/Apache-2.0.txt).
