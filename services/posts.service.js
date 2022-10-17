// services/posts.service.js

//레파지토리를 모듈을 호출
const PostRepository = require('../repositories/posts.repository');

//클래스로 만들고 
class PostService {
  postRepository = new PostRepository();
  //변수를 선언하고 PostRepository만든 인스턴스

//모든 게시물 조회
  findAllPost = async () => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const allPost = await this.postRepository.findAllPost();

    // 호출한 Post들을 가장 최신 게시글 부터 정렬합니다.
    allPost.sort((a, b) => {
      return b.createdAt - a.createdAt;
    })

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return allPost.map(post => {
      return {
        postId: post.postId,
        nickname: post.nickname,
        title: post.title,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt
      }
    });
  }
//게시글 저장
  createPost = async (nickname, password, title, content) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    //먼저 데이터 베이스에 생성 하는 문법
    const createPostData = await this.postRepository.createPost(nickname, password, title, content);

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return {
      postId: createPostData.null,
      nickname: createPostData.nickname,
      title: createPostData.title,
      content: createPostData.content,
      createdAt: createPostData.createdAt,
      updatedAt: createPostData.updatedAt,
    };
  }
 //상세페이지 조회
 findOnePost = async (postId)=>{
    //포스트 하나만 찾을꺼니깐 보내야함 저장소로
    const Onepost = await this.postRepository.findOnePost(postId);
    //날짜를 기준으로 내림차순 해준다.
 console.log(Onepost)
      return {
      postId : Onepost.postId,
      nickname : Onepost.nickname,
      title : Onepost.title,
      content : Onepost.content,
      createdAt : Onepost.createdAt,
      updatedAt : Onepost.updatedAt,
    }
  }
}

module.exports = PostService;