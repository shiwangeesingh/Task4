var{mongoose, conn} = require("../module/connection");
let  userSchema  = mongoose.Schema(
    {
        name : {
            type: String,
            default : null
        },
        email : {
            type: String,
            default : null
        },
        mobile : {
            type: String,
            default : null
        },
        password : {
            type: String,
            default : "root"
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