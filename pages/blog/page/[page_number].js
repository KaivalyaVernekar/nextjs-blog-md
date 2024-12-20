import fs from "fs";
import path from "path";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import Pagination from "@/components/Pagination";
import { POSTS_PER_PAGE } from "@/config/index";
import { getPosts } from "@/lib/posts";
import CategoryList from "@/components/CategoryList";

export default function Blog({ posts, numOfPages, currentPage, categories }) {
  return (
    <Layout>
      <div className="flex justify-between flex-col md:flex-row">
        <div className="w-3/4 mr-10">
          <h1 className="text-5xl border-b-4 p-5 font-bold">Blog</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>

          <Pagination currentPage={currentPage} totalPages={numOfPages} />
        </div>

        <div className="w-1/4">
          <CategoryList categories={categories} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const numOfPages = Math.ceil(files.length / POSTS_PER_PAGE);
  let paths = [];

  for (let i = 1; i <= numOfPages; i++) {
    paths.push({
      params: { page_number: i.toString() },
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const files = fs.readdirSync(path.join("posts"));

  const posts = getPosts();

  // get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)];

  const page = parseInt(params?.page_number || 1);

  const numOfPages = Math.ceil(files.length / POSTS_PER_PAGE);

  const pageNumber = page - 1;

  const sortedPosts = posts.slice(
    pageNumber * POSTS_PER_PAGE,
    (pageNumber + 1) * POSTS_PER_PAGE
  );

  return {
    props: {
      posts: sortedPosts,
      numOfPages,
      currentPage: page,
      categories: uniqueCategories,
    },
  };
}
