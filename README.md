# Barebones react router test app

## Install

Note: requires `yarn`

1. Pull repo
1. Install dependencies `yarn install`
1. Run server `yarn start`

## Deploy

Note: requires `awscli`

1. Paste your s3 bucket name into `deploy` script in root of repo
1. Run `./deploy`, this will build the project using yarn and upload objects to the specified s3 bucket
