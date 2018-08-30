var user = require('../controller/user');
var path=require("path");
exports.default = function(app) {
app.route('/user/submit').post(user.submit);

return(app)
}