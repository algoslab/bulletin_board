import { useSelector } from "react-redux";
import {selectAllPosts} from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';



const PostsList = () => {

    const posts = useSelector(selectAllPosts);
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));


    const renderedPosts = orderedPosts.map(post => (
      
        <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">
              <PostAuthor userId={post.userId} />
              <TimeAgo timestamp={post.date} />
              <ReactionButtons post={post} />
            </p>
        </article>
    ))
  return (
    <section>
        <h1>Posts</h1>
        {renderedPosts}
    </section>
  )
}

export default PostsList
