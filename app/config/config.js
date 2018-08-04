require('dotenv').config();
module.exports = !function configEnv(){
  process.env.NODE_ENV = 'development'
}