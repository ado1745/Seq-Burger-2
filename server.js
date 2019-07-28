const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3000;

// Middleware
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
  })
);
app.set('view engine', 'handlebars');

// Setting static folder
app.use(express.static('public'));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



const routes = require('./controllers/burgers_controller');
app.use(routes);

db.sequelize.sync().then(() => {
  app.listen(PORT || 3000, () => {
    console.log(`App now listening on http://localhost:${PORT}`);
  });
});
