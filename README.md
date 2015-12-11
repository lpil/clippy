Clippy
======

Your friendly digital assistant, a browser extension for Chrome.


## Development info

Install Node.

```sh
npm install # Download deps
npm test    # Run the tests
npm start   # Start the compiler
```

1. Go to [chrome://extensions](chrome://extensions)
2. Enable developer mode
3. Click 'Load unpacked extension…'
4. Select the `./public` directory


### Scripts

```sh
npm run-script clean # Empty the public dir
```

## Dev Notes

[Understanding Chrome
Extensions](https://gist.github.com/jjperezaguinaga/4243341)

API Docs

* [Storage](https://developer.chrome.com/extensions/storage)
* [Event pages](https://developer.chrome.com/extensions/event_pages)
* [Tabs](https://developer.chrome.com/extensions/tabs)
