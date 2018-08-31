var{mongoose, conn} = require("../module/connection");
let  userSchema  = mongoose.Schema(
    {
        UserId : {
            type: String,
            default : null
        },
        UserName : {
            type: String,
            default : null
        },
        name : {
            type: String,
            default : null
        },
        email : {
            type: String,
            default : null
        },
        gender : {
            type: String,
            default : "male"
        },
        DOB : {
            type: String,
            default : null
        },
        age : {
            type: Number,
            default : null
        },
        Intrest_in_age : {
            type: Number,
            default : null
        },
        Title : {
            type: String,
            default : null
        },
        mobile : {
            type: String,
            default : null
        },
        Description : {
            type: String,
            default : null
        },
        created_on: { type: Date }
    },
    {
        strict: true,
        collection: 'User',
        versionKey: false
    }
);
exports.userSchema = userSchema;
exports.UserModel = conn.model('User', userSchema); 