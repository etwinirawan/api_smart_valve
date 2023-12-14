require("dotenv").config();
// Mendapatkan SECRET_KEY yang diharapkan dari environment variable (env)
const kode_env = process.env.SECRET_KEY;
async function reqToken(req, res) {}

function verify(token) {
  let result = {};

  jwt.verify(token, kode_env, (err, decoded) => {
    if (err) {
      result = {
        status: false,
      };
    } else {
      // cek db identity
      result = {
        nama_db: decoded,
        status: true,
      };
    }
  });

  return result;
}
async function inputData(req, res) {
  const { token, volume, debit } = req.body;
}

async function dashboard(req, res) {}

module.exports = { inputData, reqToken, dashboard };
