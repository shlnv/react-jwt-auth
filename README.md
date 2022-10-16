# React Typescript JWT authorization with mock mirage.js API

This is my implementation of Json Web Token authorisation that writes token to session storage.
Mock API has the function that creates JWT using crypto.js and decrypt it to check user's role and expiration date.

mirage.js allows to replace the mock API with a real one very quickly, without big changes of code.

For validating and processing forms I used React final form.