import Link from 'next/link';

const PostList = (props) => {
  return (
    <>
      <li key={props.article.id}>
        <Link href={`/information/${props.article.id}`}>
          <a>{props.article.title}</a>
        </Link>
      </li>
    </>
  );
};

export default PostList;
