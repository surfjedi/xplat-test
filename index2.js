//NOTE: it appears that the first dotenv persists and overrides all others
require('dotenv').config({path:'.env.'})

//NOTE: the below doesn't take effect
require('dotenv').config()

function usevars() {
  let fromEnvFile = process.env.ENV_VAR;
  return fromEnvFile;
}

usevars()

module.exports = {usevars}
