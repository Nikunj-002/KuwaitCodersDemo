import Head from "next/head";
import { Fragment } from "react";
import PostContent from "../../components/posts/post-detail/post-content";
//renders one individual post details

function PostDetailPage(props) {
  if (!props.post) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { postId } = context.params;

  const response = await fetch(`http://127.0.0.1:3005/posts/${postId}`);

  const postData = await response.json();
  console.log(postData);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

// paths is kept empty arrow means post will be fetched on demand from server.
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default PostDetailPage;
