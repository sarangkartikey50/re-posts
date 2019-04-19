# ![GitHub Logo](/public/logo.svg) Re-Posts

A Progressive Web App (PWA) example. It fetches posts from [jsonplaceholder posts api](https://jsonplaceholder.typicode.com/posts) and displays them. When offline it shows cached posts. You can also add to your home screen as an app.

> For caching data, [Dexie](https://dexie.org/) - an IndexedDB wrapper is used.

You can verify the requirements of PWA using chrome developer tools & lighthouse extension.
[Lighthouse](https://developers.google.com/web/tools/lighthouse/) tests if your app:

1) Can load in offline or flaky network conditions
2) Is relatively fast
3) Is served from a secure origin
4) Uses certain accessibility best practices

Lighthouse is available as a Chrome extension for Chrome 52 (and later) and a command line tool.

## Monitor Performance

```
npx lighthouse https://sarangkartikey50.github.io/re-posts/ --view
```
or you can also use lighthouse chrome extension.


## Usage

```js
npm install  //install all the node modules
npm start  //runs the app
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
