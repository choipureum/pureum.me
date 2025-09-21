"use client";

import { useId } from "react";

export default function Posts() {
  const uniqueId = useId();
  const posts = [
    {
      title: "첫 번째 포스트",
      excerpt: "첫 번째 포스트의 요약 내용입니다.",
      date: "2024-01-15",
      slug: "first-post",
    },
    {
      title: "두 번째 포스트",
      excerpt: "두 번째 포스트의 요약 내용입니다.",
      date: "2024-01-10",
      slug: "second-post",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">포스트</h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          개발과 관련된 생각과 경험을 공유합니다.
        </p>
      </div>

      <div className="space-y-8">
        {posts.map((post, index) => (
          <article
            key={`${uniqueId}-post-${index}-${post.slug}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              <a
                href={`/posts/${post.slug}`}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {post.title}
              </a>
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <time className="text-sm text-gray-500">{post.date}</time>
              <a
                href={`/posts/${post.slug}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                읽기 →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
