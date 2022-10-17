// routes/posts.routes.js

const express = require('express');
const router = express.Router();
 //controllers/posts.controller를 불러온다
const PostsController = require('../controllers/posts.controller');
const postsController = new PostsController(); //변수에 최초로 가져온 모듈에 대한 클래스를 선언함


// 라우터와 컨트롤러 메서드를 연결시켜줌
//기본 으로 들어왔을때 router.get을 통한 postsController.getPosts를 실행 할꺼야
router.get('/', postsController.getPosts);

router.post('/', postsController.createPost);
//어떤 url과 ,http메서드가 어떤 컨트롤러의 메서드로 갈지 확인 하는것 미들웨어 사용가능

router.get('/:postId', postsController.getPostOne);
module.exports = router;