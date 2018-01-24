const Mock = require('mockjs')

module.exports = {
  [`GET /api/menus`](req, res) {
    res.status(200).json();
  }
}
