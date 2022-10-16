// controllers/posts.controller.js

//포스트 서비스의 모듈을 찾아옴
const PostService = require('../services/posts.service');

// Post의 컨트롤러(Controller)역할을 하는 클래스
// module.exports = {} 사용가능
class PostsController {
  postService = new PostService(); // Post 서비스를 클래스를 컨트롤러 클래스의 멤버 변수로 할당합니다.

  getPosts = async (req, res, next) => {
    // 서비스 계층에 구현된 findAllPost 로직을 실행합니다.
    const posts = await this.postService.findAllPost();
    //포스트 서비스에서 findALLPost라는 메서드를 실행함
    res.status(200).json({ data: posts })
    //결과값을 사용자에게 리턴하는 방식
  }

  createPost = async (req, res, next) => {
    const { nickname, password, title, content } = req.body;

    // 서비스 계층에 구현된 createPost 로직을 실행합니다.
    const createPostData = await this.postService.createPost(nickname, password, title, content);
    //포스트 서비스에서 createPost 메서드를 실행함
    res.status(201).json({ data: createPostData });
  }
}

module.exports = PostsController;