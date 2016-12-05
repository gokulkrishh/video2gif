# Video2GIF

# Quick-Start Guide

- [Installation](#installation)
- [Development Workflow](#development-workflow)

## Installation

**1. Clone this repo:**

```sh
git clone --depth 1 https://github.com/developit/preact-boilerplate.git my-app
cd my-app
```


**2. Make it your own:**

```sh
rm -rf .git && git init && npm init
```

> :information_source: This re-initializes the repo and sets up your NPM project.


**3. Install the dependencies:**

```sh
npm install
```

> You're done installing! Now let's get started developing.



## Development Workflow


**4. Start a live-reload development server:**

```sh
npm run dev
```

> This is a full web server nicely suited to your project. Any time you make changes within the `src` directory, it will rebuild and even refresh your browser.

**5. Testing with `mocha`, `karma`, `chai`, `sinon` via `phantomjs`:**

```sh
npm test
```

**6. Generate a production build in `./build`:**

```sh
npm run build
```

> You can now deploy the contents of the `build` directory to production!
>
> **[Surge.sh](https://surge.sh) Example:** `surge ./build -d my-app.surge.sh`


**5. Start local production server with `superstatic`:**

```sh
npm start
```

### MIT License