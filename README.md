# vue-static-site-poc
Proof of concept - vue static site build, with dynamic data injected

## About
The proof of concept was created in order to prove an unhosted, static site, could be served from a directory
on a computer, consume and use APIs, and use data that would be injected into the static file, by a credit union
core processing server.

* This is mostly to demonstrate how Vue could be incorporated into a credit union's core processing platform.
Because this credit union platform renders HTML generated code using plain HTML files, stored locally on the client machines,
it isn't a full web server and this project was used to prove it could use an SPA as a solution to improve the
management, maintenance, and support of the web interface. All while using javascript as the primary coding language.

Using Typical Developer Tools to build a VueJS static site, then using the vue-cli to `build` the site, you can
have the CU platform render the page(s) with dynamic data, by injecting the values into the [index.html](./public/index.html) file,
before rendering it in the platform's browser.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
