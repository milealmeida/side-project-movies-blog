import { MdStringObject } from 'notion-to-md/build/types';

export type BlogPost = {
  id: string;
  slug: string;
  cover: string;
  title: string;
  tags: {
    id: string;
    name: string;
    color: string;
  }[];
  description: string;
  date: string;
  author: {
    avatar_url: string;
    name: string;
  };
};

export type PostPage = {
  post: BlogPost;
  markdown: MdStringObject;
};
