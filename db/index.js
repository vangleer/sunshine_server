const mysql = require('mysql');
//创建数据库连接
let pool = mysql.createPool({
  host: '118.31.225.7',
  user: 'root',
  password: 'asdfaksXX@X52',
  database: 'test'
});

let query = function (sql, values) {
  // 返回一个 Promise
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {

          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          // 结束会话
          connection.release()
        })
      }
    })
  })
}
module.exports = query;