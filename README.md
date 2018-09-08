# demo create-react-app with ext-react

After running `npm install`, run `npm run test` in the `master` branch. Then switch to the `bad` branch and run it again.

In `master`, `pass.test.js` passes & `fail.test.js` fails. The component in `pass.js` imports only from `@sencha/ext-modern`, while `fail.js` imports from `@sencha/ext-modern` and also `@sencha/ext-react`.

In `bad`, both tests are the same and both tests fail.
