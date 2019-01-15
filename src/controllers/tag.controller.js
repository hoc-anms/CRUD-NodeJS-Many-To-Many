const Tag = require('../models/tag.model');

module.exports = {
    getAllTag: async (req, res, next) => {
        const tags = await Tag.find({});
        res.status(200).json(tags);
    },

    getTag: async (req, res, next) => {
        const { tagId } = req.params;
        const tag = await Tag.findById(tagId);
        res.status(200).json(tag);
    },

    createTag: async (req, res, next) => {
        const createTag = new Tag(req.body);
        const tags = await createTag.save();
        console.log(tags);
        res.status(201).json(tags);
    },

    updateTag: async (req, res, next) => {
        const { tagId } = req.params;
        const newTag = req.body;
        await Tag.findByIdAndUpdate(tagId, newTag);
        res.status(200).json({ success: true });
    },

    deleteTag: async (req, res, next) => {
        const { tagId } = req.params;
        await Tag.findByIdAndRemove(tagId);
        res.status(200).json({ success: true });
    },

    getTagByQuestion: async (req, res, next) => {
        const { tagId } = req.params;
        const tag = await Tag.findById(tagId).populate('_question');
        res.status(200).json(tag._question);
    }

    
};

