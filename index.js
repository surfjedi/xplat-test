require('dotenv').config()
require('dotenv').config({path:'.env.'})

function usevars() {
  let fromEnvFile = process.env.ENV_VAR;
  return fromEnvFile;
}

usevars()

module.exports = {usevars}
