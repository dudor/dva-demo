const Mock = require('mockjs');
let db = Mock.mock({'data|3-6': [{id: '@id', name: '@name', 'age|18-32': 1}]});
module.exports = {
  [`GET /api/users`](req, res) {
    res.status(200).json(db);
  },
  [`POST /api/users`](req, res) {
    let user = req.body;
    console.log(req);
    user.id = Mock.mock('@id');
    db.data.push(user);
    res.status(200).json(user);
  },
  [`POST /api/login`](req, res) {
    let user = req.body;
    const result = {
      success: false,
      message: ''
    }
    if(user && user.userName == 'admin' && user.password == 'admin'){
      result.status = 'ok';
      result.message = '登陆成功';
      result.success = true;
    }
    else{
      result.message = '登陆失败';
      result.success = false;
    }
    res.status(200).json(result);
  }
}
