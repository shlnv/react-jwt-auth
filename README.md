# React Typescript JWT authorization on clean architecture and mock mirage.js API

This is my implementation of Json Web Token authorisation that writes token to session storage.
Mock API has functions that creates JWT using crypto.js and decrypt it to check user's role and expiration date.

mirage.js allows to connect to server very quickly, without big changes of code.

For validating and processing forms, I used react final form.
