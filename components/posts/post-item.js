import Link from 'next/link';
import Image from 'next/image';

function PostItem(props) {
  const { title, image, excerpt, date, creator, id } = props.post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${image}`;
  const linkPath = `/posts/${id}`;

  return (
    <li className={'list-post'}>
      <Link href={linkPath}>
        <div className={''}>
          <h3>{title}</h3>
          <span>By: {creator}</span> <time>({formattedDate})</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
