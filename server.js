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

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting static folder
app.use(express.static('public'));

const routes = require('./controllers/burgers_controller');
app.use(routes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App now listening on http://localhost:${PORT}`);
  });
});
