# ReactJS Exercise Create a Tic-Tac-Toe Game

Just refresh my React memory and make their [tic-tac-toe](https://reactjs.org/tutorial/tutorial.html) tutorial.

## Install react within the project

In the original tutorial, they use `create-react-app` to create a new project. But here is used [Vite](https://vitejs.dev/). Note [Node.js and NPM](https://wiki.metalevel.tech/wiki/Node.js_Getting_Started) are required.

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

In order to change the port of the dev-server, edit the [`package.json`](package.json) file and add the `--port` option to the `dev` script.

```json
"scripts": {
  "dev": "vite --port 3000",
},
```

To start the Vite's dev-server use:

```bash
npm run dev
```

Finally create [`jsconfig.json`](jsconfig.json) file in the root directory of the react project to enable the [IntelliSense](https://code.visualstudio.com/docs/languages/javascript#_intellisense) for the JavaScript files.
