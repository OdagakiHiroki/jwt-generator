# jwt-generator

## Usage
execute following command to make private key.
```
openssl genpkey -algorithm RSA -out rsa_private.pem -pkeyopt rsa_keygen_bits:2048
```
place the `rsa_private.pem` file in the root directory.

set any value to the `jwtPayload` in the `index.js` file.

execute the following command.
```
npm run generate
```
The JWT will be outputted in the logs.