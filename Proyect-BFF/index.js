const express = require('express');
const sequelize = require('./bd');   

const app = express();
app.use(express.json());

sequelize.authenticate()
  .then(() => console.log(' conectaste'))
  .catch(err => console.error('hay un error:', err));

app.listen(1606, () => {
  console.log('Servidor corriendo en http://localhost:2629');
});