// repositories/posts.repository.js
//모델을 불러온다
const { Posts } = require('../models');

class PostRepository {
  findAllPost = async () => {
    // ORM인 Sequelize에서 Posts 모델의 findAll 메소드를 사용해 데이터를 요청합니다.
    //디비에서 찾아와서 서비스로 보내준다 
    const posts = await Posts.findAll();

    return posts;
  }
    //서비스에서 받아온걸 저장한다.
  createPost = async (nickname, password, title, content) => {
    // ORM인 Sequelize에서 Posts 모델의 create 메소드를 사용해 데이터를 요청합니다.
    const createPostData = await Posts.create({ nickname, password, title, content });

    return createPostData;
  }

  findOnePost = async (postId)=>{
    console.log(postId,"12312345646")
    const posts = await Posts.findByPk(postId)
    return posts
  }
}

module.exports = PostRepository;