//import dependences
const router = require('express-promise-router')();

const TagsController = require('../controllers/tag.controller');


//define router
router.route('/')
    .get(TagsController.getAllTag)
    .post(TagsController.createTag);

router.route('/:tagId')
    .get(TagsController.getTag)
    .patch(TagsController.updateTag)
    .delete(TagsController.deleteTag)

router.route('/:tagId/question')  
    .get(TagsController.getTagByQuestion)

//export router
module.exports = router;