
function usevars() {
  let stuff1 = process.env.stuff1;
  let stuff2 = process.env.stuff2;
  return fromEnvFile;
}

usevars()

module.exports = {usevars}
