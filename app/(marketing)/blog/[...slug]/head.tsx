import { Blog } from "@/lib/mdx/sources"

export default async function Head({ params }) {
  const post = await Blog.getMdxNode(params?.slug)

  return (
    <>
      <title>{post.frontMatter.title}</title>
      {post.frontMatter.excerpt && (
        <meta name="description" content={post.frontMatter.excerpt} />
      )}
    </>
  )
}
