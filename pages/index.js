import { Fragment } from 'react';
import Head from 'next/head';
import FeaturedPosts from '../components/home-page/featured-posts';
//renders Featured posts

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Sample Nextjs demo</title>
        <meta
          name='description'
          content='Post about programming and web development.'
        />
      </Head>	  
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

//preparing props for above component for prerendering
export async function getStaticProps() {	
  const response = await fetch('http://127.0.0.1:3005/posts');

  if (!response.ok) throw Error("Failed getting posts");

  const allPosts = await response.json();

  const featuredPosts = allPosts.filter(post => post.isFeatured);


  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
