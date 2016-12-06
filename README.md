# MusoLingo 

Music is a language. Learn the fundamentals in this React-based educational app.

## Running Locally

### Prerequisites
- Node (>6.7) and npm
- PostgreSQL

### Run It

```sh
npm install
npm run seed
npm run build-watch
npm start
```

The above script will go through the following steps:
1. install npm dependencies
1. populate your Postgres DB with the seed data in `db/seed.js`
1. perform a build with Webpack and watch for changes
1. run the server and watch for file changes with nodemon

We have one versions of the app on Heroku:  
// **Prod**: [https://eighty-eight-keys.herokuapp.com](https://eighty-eight-keys.herokuapp.com) 
