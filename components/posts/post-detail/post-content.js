
import Image from 'next/image';
import classes from './post-content.module.css';

function PostContent(props) {
  const { post } = props;
  console.log(post)
      const formattedDate = new Date(props.post.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${post.image}`;


  return (
    <article className={classes.content}>
      <h1>{post.title}</h1>
      <Image src={imagePath} alt={post.title} width={200} height={150} />
	    <p>Created By: {post.creator}</p>
	    <p><time>{formattedDate}</time></p>
      <p>{post.excerpt}</p>
    </article>
  );
}

export default PostContent;
