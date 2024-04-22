To install packages: `npm install`

To see the issue with stale data being served:

1. Run` backend-old.js` in one terminal
2. In another terminal, run `next build`
3. Stop `backend-old.js` in the first terminal, and run `backend-new.js`
4. In the second terminal, run `next start`
5. See the results displayed in pages `always-1-min` and `next-phase`, trying to refresh the page multiple times, and waiting to time given in `revalidate` to pass (the number is in in seconds)

[Frontend listens on port 3000](http://localhost:3000), "backend" listens on port 3001.

If you forget to run the backend, you'll see an error `TypeError: fetch failed`.
