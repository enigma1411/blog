# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```

### Help

1-Open vscode in side parent folder (code)

2-run following command
npx create-remix@latest blog(blog-app name)
-Just the basics
-Remix App Server
-JavaScript
-Y

3- Open blog folder in vscode

4- Problem in jsconfig.json (for javascript project)

ts to js and tsx to jsx

5- install tailwind
npm install -D tailwindcss postcss autoprefixer concurrently

6- create tailwind config file

npx tailwindcss init

it will generate ./tailwind.config.js

change it by pasting

6-Update the scripts in your package.json file to build both your development and production CSS.

paste it

7-Add the Tailwind directives to your CSS

./styles/app.css

paste it
8- import ./styles/app.css in root.jsx (./styles/app.css will create on npm run dev)

9- create link function

10-change/simplify app/routes/index.jsx for testing

11-npm run dev (file in pont 8 will be created) and project will start on http://localhost:3000/
