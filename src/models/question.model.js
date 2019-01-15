const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    titleQuestion :String, 
    descQuestion: String, 
    contentQuestion: String, 
    _tag:[ {
        type: Schema.Types.ObjectId,
        ref: 'Tag',
    }]

});

const Question = mongoose.model('Question', QuestionSchema)
module.exports = Question;