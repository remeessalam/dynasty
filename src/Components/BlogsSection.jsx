import { CiCalendar } from "react-icons/ci";
import { blogs } from "../data/blogs";
import { LiaCommentSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

export default function BlogSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-wider mb-4">OUR POST</p>
        <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
          Insights That Inspire: Explore Our Latest Blogs on Innovation and
          Technology.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((post, index) => (
          <Link
            to={`/blogs/${post.pathname}`}
            key={index}
            className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.mainImage || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col flex-grow p-6">
              <h3 className="text-xl font-bold mb-2 hover:text-blue-600 cursor-pointer">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow  overflow-hidden">
                {post.displayArticle}
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="flex items-center">
                  <CiCalendar className="w-4 h-4 mr-2" />
                  {post.date}
                </span>
                <span className="flex items-center ml-4">
                  <LiaCommentSolid className="w-4 h-4 mr-2" />
                  29
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
