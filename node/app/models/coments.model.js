const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ObjectId = schema.ObjectId;

const CommentsSchema = new schema({
    author : {type: ObjectId, ref: 'User'},
    text : {type: String, require: true},
    create_up : {type: Date},
    update_up : {type: Date}
})


Comment = mongoose.model('Comment', CommentsSchema);

module.exports = Comment;