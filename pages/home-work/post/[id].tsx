import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { withLayoutHM } from '@/home-work-components/Layout/Layout';
import { ParsedUrlQuery } from 'querystring';
import { PostComments, PostItem } from '@/interfaces/home-work/post.interface';
import PostPage from '@/homw-work-page-components/PostPage/PostPage';

function Post({ post, comments }: Props): JSX.Element {
  return <PostPage post={post} comments={comments} />;
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

    const { data: comments } = await axios.get<PostComments[]>(
      process.env.NEXT_PUBLIC_DOMAIN_HM + `/comments?postId=${id}`
    );
    return {
      props: {
        post,
        comments,
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
  comments: PostComments[];
  github: string;
}
