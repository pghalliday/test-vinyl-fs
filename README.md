test-vinyl-fs
=============

Test project to demo issue with `vinyl-fs`, `gulp.src()` and symlinked directories

```
npm install
npm test
```

Note the following output

```
> test-vinyl-fs@ test /Users/pghalliday/Development/test-vinyl-fs
> gulp

[18:28:03] Using gulpfile ~/Development/test-vinyl-fs/gulpfile.js
[18:28:03] Starting 'default'...

events.js:72
        throw er; // Unhandled 'error' event
              ^
Error: EISDIR, read
npm ERR! Test failed.  See above for more details.
```

As a double check I added a test that uses `vinyl-fs` directly

```
npm start
```

gives the following output

```
> test-vinyl-fs@ start /Users/pghalliday/Development/test-vinyl-fs
> gulp direct

[18:32:32] Using gulpfile ~/Development/test-vinyl-fs/gulpfile.js
[18:32:32] Starting 'direct'...

events.js:72
        throw er; // Unhandled 'error' event
              ^
Error: EISDIR, read

npm ERR! Darwin 13.4.0
npm ERR! argv "node" "/Users/pghalliday/.node/bin/npm" "start"
npm ERR! node v0.10.31
npm ERR! npm  v2.0.0
npm ERR! code ELIFECYCLE
npm ERR! test-vinyl-fs@ start: `gulp direct`
npm ERR! Exit status 8
npm ERR! 
npm ERR! Failed at the test-vinyl-fs@ start script.
npm ERR! This is most likely a problem with the test-vinyl-fs package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     gulp direct
npm ERR! You can get their info via:
npm ERR!     npm owner ls test-vinyl-fs
npm ERR! There is likely additional logging output above.

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/pghalliday/Development/test-vinyl-fs/npm-debug.log
```
