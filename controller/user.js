const { UserModel } =  require('../model/user');
var config = require('../module/config.json');
const md5 = require('md5');
var commFunc = require('../module/commonFunction');
var responses = require('../module/responses');

exports.submit = function(req, res){
    var {name, email, mobile, password} = req.body;
    let data= commFunc.checkKeyExist({name, email, password, mobile})
    if(data.status == false || data=='undefined')
    { 
        responses.parameterMissing(res, data.data);
    }
    else{
        UserModel.find({"email":email }) 
        .then(data=>{
            if (data.length > 0) {
                responses.emailAlreadyExist(res)  
            }
            else{
                UserModel.find({"mobile":mobile }) 
                .then(data=>{
            if (data.length > 0) {
                responses.numberAlreadyExist(res)  
            }
            else
            {
                var user ={};
                user.name = req.body.name;
                user.email = req.body.email;
                user.mobile = req.body.mobile;
                user.password = md5(req.body.password);
                var userdata = new UserModel(user);
                userdata.save().then(data =>{
                    responses.success(res, user)
                })
                .catch (error =>{
                    responses.sendError(res)
                })
            }
        })
            }
        })
    }
}