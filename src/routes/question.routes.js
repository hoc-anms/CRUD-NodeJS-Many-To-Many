//import dependences
const router = require('express-promise-router')();


const QuestionsController = require('../controllers/question.controller');


//define router
router.route('/')
    .get(QuestionsController.getAllQuestion)
    .post(QuestionsController.createQuestion);

router.route('/:questionId')  
    .get(QuestionsController.getQuestion)
    .patch(QuestionsController.updateQuestion)
    .delete(QuestionsController.deleteQuestion)

router.route('/:questionId/tag') 
    .get(QuestionsController.getTagInQuestion)
    .post(QuestionsController.addTagInQuestion);
//export router
module.exports = router;