import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { withLayoutHM } from '@/home-work-components/Layout/Layout';
import { ParsedUrlQuery } from 'querystring';
import { PostItem } from '@/interfaces/home-work/post.interface';

function Post({ post }: Props): JSX.Element {
  return <pre>{JSON.stringify(post, null, 2)}</pre>;
}

export default withLayoutHM(Post);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[];
  try {
    const { data: posts } = await axios.get<PostItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN_HM + '/posts?_limit=10'
    );
    paths = posts.map((p) => `/home-work/post/${p.id}`);
  } catch {
    paths = [];
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const { id } = params;
  const gitHubLink = 'https://github.com/ananevandrei11';
  try {
    const { data: post } = await axios.get<PostItem>(
      process.env.NEXT_PUBLIC_DOMAIN_HM + `/posts/${id}`
    );
    return {
      props: {
        post,
        github: gitHubLink,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

interface Props extends Record<string, unknown> {
  post: PostItem;
  github: string;
}
