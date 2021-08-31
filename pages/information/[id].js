// pages/blog/[id].js
import styles from '../../styles/components/Editor.module.scss';
import { client } from '../../libs/client';
import Link from 'next/link';

export default function BlogId({ information }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{information.title}</h1>
      <p className={styles.publishedAt}>{information.publishedAt}</p>
      <div
        className={styles.microEditor}
        dangerouslySetInnerHTML={{
          __html: `${information.body}`,
        }}
      />

      <Link href={'/'}>
        <button>トップへ戻る</button>
      </Link>
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'information' });
  const paths = data.contents.map((content) => `/information/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'information', contentId: id });

  return {
    props: {
      information: data,
    },
  };
};
