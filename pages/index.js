// pages/index.js
import { client } from '../libs/client';
import Button from '../components/Button';
import Post from '../components/Post';

export default function Home({ information }) {
  return (
    <div>
      <ul>
        {information.map((information, i) => (
          <Post key={i} article={information} />
        ))}
      </ul>
      <Button />
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'information' });
  return {
    props: {
      information: data.contents,
    },
  };
};
