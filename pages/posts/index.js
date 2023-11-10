import Head from 'next/head';
import { Fragment } from 'react';

//renders all posts from json-sever db.json file

import AllPosts from '../../components/posts/all-posts';

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='A list of all programming-related tutorials and posts!'
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

//preparing props for above component for prerendering
export async function getStaticProps() {
  const response = await fetch('http://127.0.0.1:3005/posts');

  if (!response.ok) throw Error("Failed getting posts");

  const allPosts = await response.json();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
