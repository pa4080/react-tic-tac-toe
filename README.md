# ReactJS Exercise Create a Tic Tac Toe Game

Just refresh my React memory by their [Tutorial](https://reactjs.org/tutorial/tutorial.html).

* [Tic Tac Toe: Final result](https://codepen.io/gaearon/pen/gWWZgR?editors=0010)
* [Tic Tac Toe: Starter code](https://codepen.io/gaearon/pen/oWWQNa?editors=0010)

## Install React within the project

In the original tutorial, they use [`create-react-app`](https://reactjs.org/docs/create-a-new-react-app.html) to create a new project. But here is used [Vite](https://vitejs.dev/). Note in all cases [Node.js and NPM](https://wiki.metalevel.tech/wiki/Node.js_Getting_Started) are required.

In the snippet below we are using `.` to create the react project in the current directory. This will wipe all existing files in the current directory excepts the `.git` directory.

```bash
cd project-root-dir/
npm create vite@latest
# ✔ Project name: … .
# ✔ Current directory is not empty. Remove existing files and continue? … yes
# ✔ Select a framework: › React
# ✔ Select a variant: › JavaScript
npm install
```

In order to change the port of the dev-server, edit the [`package.json`](package.json) file and add the `--port` option to the `dev` script. By default the server will accept requests only at `localhost` but not at `127.0.0.1`, no matter what is written in `/etc/hosts`. To change this behavior add the `--host 127.0.0.1` option to the `dev` script. The final `dev` script will look like this:

```json
"scripts": {
  "dev": "vite --port 3000 --host 127.0.0.1"
},
```

To start the Vite's dev-server use:

```bash
npm run dev
```

Next create [`jsconfig.json`](jsconfig.json) file in the root directory of the react project to enable the [IntelliSense](https://code.visualstudio.com/docs/languages/javascript#_intellisense) for the JavaScript files.

To build the application for production use:

```bash
npm run build
```

## Prepare React for the Project

1. Edit the [`index.html`](index.html) file: Change the title tag, the favicon file name, etc.
2. Review and tweak the content of the [`public/`](`public/`) directory.
3. In the [`src/`](src/) directory keep only the files [`main.jsx`](src/main.jsx) and [`index.css`](src/index.css) and delete the rest. Also:
   * Wipe the content of the [`index.css`](src/index.css) file then fill it with the [starter CSS code](https://codepen.io/gaearon/pen/oWWQNa?editors=0100).
   * Wipe the content of the [`main.jsx`](src/main.jsx) file and then fill it with the [starter code](https://codepen.io/gaearon/pen/oWWQNa?editors=0010). Then add the following lines to the top of the file:

      ```jsx
      import React from "react";
      import ReactDOM from "react-dom/client";
      import "./index.css";
      ```

   * Notes:

     * If you are using `create-react-app` then, by default, you will use `index.js` as JS index file of the project, but with `vite` the default JS index file is `main.jsx`.

Thats it. Run the dev-server (`npm run dev`) and check the result in the browser. Start following the tutorial from the [Overview section](https://reactjs.org/tutorial/tutorial.html#overview).

## Notes

### Tailwind CSS

* [Tailwind CSS](https://tailwindcss.com/) is a utility-first CSS framework for rapidly building custom designs.
* [Install Tailwind CSS with Vite Official Guide](https://tailwindcss.com/docs/guides/vite)
* [How To Create React and Tailwind project with Vite by Abraham Anak Agung](https://anakagung.com/blog/how-to-create-react-and-tailwind-project-with-vite/)
*
