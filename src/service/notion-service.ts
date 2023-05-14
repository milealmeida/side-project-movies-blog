import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { BlogPost, PostPage } from 'types';

export default class NotionService {
  client: Client;

  n2m: NotionToMarkdown;

  constructor() {
    this.client = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });
    this.n2m = new NotionToMarkdown({ notionClient: this.client });
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    const database = process.env.NOTION_BLOG_DATABASE_ID ?? '';

    const response = await this.client.databases.query({
      database_id: database,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Updated',
          direction: 'descending',
        },
      ],
    });

    const result = response.results.map(
      (res) => NotionService.pageToPostTransformer(res),
    );

    return result;
  }

  async getSingleBlogPost(slug: any): Promise<PostPage> {
    const database = process.env.NOTION_BLOG_DATABASE_ID ?? '';

    const response = await this.client.databases.query({
      database_id: database,
      filter: {
        property: 'Slug',
        formula: {
          string: {
            equals: slug,
          },
        },
      },
      sorts: [
        {
          property: 'Updated',
          direction: 'descending',
        },
      ],
    });

    if (!response.results[0]) {
      throw new Error('No results available');
    }

    const page = response.results[0];

    const mdBlocks = await this.n2m.pageToMarkdown(page.id);
    const markdown = this.n2m.toMarkdownString(mdBlocks);
    const post = NotionService.pageToPostTransformer(page);

    return {
      post,
      markdown,
    };
  }

  private static pageToPostTransformer(page: any): BlogPost {
    let { cover } = page;
    const { properties, id } = page;

    switch (cover.type) {
      case 'file':
        cover = cover.file;
        break;
      case 'external':
        cover = cover.external.url;
        break;
      default:
        cover = '/img/cine.jpg';
    }

    return {
      id,
      cover,
      title: properties.Name.title[0].plain_text,
      tags: properties.Tags.multi_select,
      description: properties.Description.rich_text[0].plain_text,
      date: properties.Updated.last_edited_time,
      slug: properties.Slug.formula.string,
      author: properties.Author.people[0],
    };
  }
}
