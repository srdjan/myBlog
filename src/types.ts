export type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

export interface PostMeta {
  title: string;
  date: string;
  slug: string;
  excerpt?: string;
  tags?: string[];
  modified?: string;
}

export interface Post extends PostMeta {
  content: string; // HTML content as string (for backward compatibility)
  contentJsx?: JSX.Element; // JSX element content for mono-jsx rendering
  formattedDate?: string; // Pre-formatted date string
}

export interface TagInfo {
  name: string;
  count: number;
  posts: Post[];
}

export interface RenderContext {
  title: string;
  posts?: Post[];
  post?: Post;
  tags?: TagInfo[];
  activeTag?: string;
  path: string;
}
