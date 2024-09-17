# api-automation-miroslav-hostinger

- Javascript test automation framework, for the backend of Hostinger QA task by Miroslavs Levkovec
- This project uses [Axios](https://axios-http.com/) and [Mocha test framework](https://mochajs.org) for automation.

Prerequisites

- [NodeJS](https://nodejs.org/en/) is required to run tests locally
- VScode ESLint & Prettier, GitLens plugins are recommended
- Enabling `NPM Scripts Explorer"` via `View -> Open view... -> NPM Scripts` is recommended for test run

NodeJS

- If NodeJS is not installed, suggest to instal it using Chocolatey
- Open PowerShell with Administrator rights.
- Instal Choco, copy paste script on PoweShell:

Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

- Instal NodeJs, copy paste script on PoweShell:

choco install nodejs

- verify nodeJs is installed,check NodeJs version:
node -v

- verify nnpm is installed, check npm version
npm -v


# Installation

- Run the following command in the terminal to install the dependencies from the `package.json` file

```js
npm install
```

# Running the tests


All tests are defined in the `"scripts"` property of the `package.json`.
Tests can be run in several ways, some of which are:

1. _(More convenient)_ By selecting the test in the `NPM Scripts Explorer` window and pressing `run`.
2. By copying the key of a test and passing it as an `npm` argument, e.g.: `npm run test:userRegistrationMailIsEmpty.test`


# Troubleshooting

While calling registration API several times, hostinger.com returns 429 (too many requests). Running tests locally a VPN is recommended.



