const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    shop: [{ type: Types.ObjectId, ref: 'Shop' }],
    isAdmin:{type: Boolean, default: false}
})

module.exports = model('User', schema)