<h1 align="center">
    <img alt="React Ecoleta" src="https://res.cloudinary.com/felipesanderp/image/upload/v1594852758/readme_logos/logo_tuvs0f.svg" />
    <br>
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/felipesanderp/ecoleta.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/felipesanderp/ecoleta.svg">
  
   <a href="https://www.codefactor.io/repository/github/felipesanderp/ecoleta">
     <img src="https://www.codefactor.io/repository/github/felipesanderp/ecoleta/badge"  alt="CodeFactor" />
   </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/felipesanderp/ecoleta.svg">
  <a href="https://github.com/felipesanderp/ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/felipesanderp/ecoleta.svg">
  </a>

  <a href="https://github.com/felipesanderp/ecoleta/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/felipesanderp/ecoleta.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/felipesanderp/ecoleta">
</p>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: Technologies

This project was developed at the first [Rocketseat Next Level Week #NLW](https://blog.rocketseat.com.br/primeira-next-level-week/) with the following technologies:

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Knex.js](http://knexjs.org/)
- [ReactJS](https://reactjs.org/)
- [Leaflet](https://leafletjs.com/)
- [React Leaflet](https://react-leaflet.js.org/)
- [Axios](https://github.com/axios/axios)
- [react-icons](https://github.com/react-icons/react-icons)
- [VSCode](https://code.visualstudio.com/)

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16](https://nodejs.org/) or higher + [Yarn v1.13](https://yarnpkg.com/) or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/felipesanderp/ecoleta

# Go into the repository
$ cd ecoleta

# Go into the backend repository
$ cd backend

# Install dependencies
$ yarn

# Create database
$ yarn knex:migrate

# Populate the items table
$ yarn knex:seed

# Start the backend development server on port 3333
$ yarn dev:server

# On another terminal, go to the frontend folder
$ cd ../frontend

# Install dependencies
$ yarn

# Start the frontend development server on port 3000
$ yarn start
```

## :memo: License
This project is under the MIT license. See the [LICENSE](https://github.com/felipesanderp/ecoleta/blob/master/LICENSE) for more information.
