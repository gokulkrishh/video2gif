# Video2GIF

> A simple progressive web application to create GIF from a video.

## Quick-Start Guide

- [Installation](#installation)
- [Development Workflow](#development-workflow)

### Installation

**1. Clone this repo:**

```sh
git clone https://github.com/gokulkrishh/video2gif.git
cd video2gif
```

**2. Install the dependencies:**

```sh
npm install
```

> You're done installing! Now let's get started developing.

## Development Workflow

**1. Start a live-reload development server:**

```sh
npm run dev
```

> This is a full web server nicely suited to your project. Any time you make changes within the `src` directory, it will rebuild and even refresh your browser.

**2. Testing with `mocha`, `karma`, `chai`, `sinon` via `phantomjs`:**

```sh
npm test
```

**3. Generate a production build in `./build`:**

```sh
npm run build
```

> You can now deploy the contents of the `build` directory to production!
>
> **[Surge.sh](https://surge.sh) Example:** `surge ./build -d my-app.surge.sh`


**4. Start local production server with `superstatic`:**

```sh
npm start
```

### MIT License