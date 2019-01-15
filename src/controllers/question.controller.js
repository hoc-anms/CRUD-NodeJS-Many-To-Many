const Question = require('../models/question.model');
const Tag = require('../models/tag.model')
module.exports = {
    getAllQuestion: async (req, res, next) => {
        const questions = await Question.find({});
        res.status(200).json(questions);
    },

    getQuestion: async (req, res, next) => {
        const { questionId } = req.params;
        const question = await Question.findById(questionId);
        res.status(200).json(question);
    },

    createQuestion: async (req, res, next) => {
        const newQuestion = new Question(req.body);
        const question = await newQuestion.save();
        res.status(201).json(question);
    },

    updateQuestion: async (req, res, next) => {
        const { questionId } = req.params;
        const newQuestion = req.body;
        await Question.findByIdAndUpdate(questionId, newQuestion);
        res.status(200).json({ success: true });
    },

    deleteQuestion: async (req, res, next) => {
        const { questionId } = req.params;
        await Question.findByIdAndRemove(questionId);
        res.status(200).json({ success: true });
    },

    //get all tags have in question
    getTagInQuestion: async (req, res, next) => {
        const { questionId } = req.params;
        const question = await Question.findById(questionId).populate(' _tag');
        // console.log(question._tag);
        res.status(200).json(question._tag);
    },

    //add tag in question
    addTagInQuestion: async (req, res, next) => {
        const { questionId } = req.params;
        // Create new tag 
        const newTag = new Tag(req.body);
        // get question
        const question = await Question.findById(questionId);
        // assign tag to question
        newTag.question = question;
        // save tag
        await newTag.save();
        // add tag to the question array
        question._tag.push(newTag);
        // save question
        await question.save();
        res.status(201).json(newTag);
    }



}