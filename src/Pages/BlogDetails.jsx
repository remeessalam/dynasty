import { Link, useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import { CiCalendar } from "react-icons/ci";
import { RiAdminLine } from "react-icons/ri";
import { LiaCommentSolid } from "react-icons/lia";
import PageBanner from "../Components/PageBanner";
import { FaYoutube } from "react-icons/fa";
import SocialMediaIcons from "../Components/SocialMediaIcons";
const BlogDetails = () => {
  const { id } = useParams();

  const selectedBlogs = blogs.find((obj) => obj.pathname === id);

  if (!selectedBlogs) {
    return <div>Service not found</div>;
  }
  return (
    <>
      <PageBanner
        page={"blog"}
        title={selectedBlogs.title}
        bannerImage={selectedBlogs.bannerImage}
      />
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8 py-[5rem]">
        {/* Main Content Area */}
        <div className="w-full md:w-2/3">
          <img
            src={selectedBlogs.mainImage}
            alt="Person using tablet"
            className="w-full mb-6"
          />

          <div className="flex items-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center">
              <CiCalendar className="w-5 h-5 mr-2" />
              {selectedBlogs.date}
            </div>
            <div className="flex items-center">
              <RiAdminLine className="w-5 h-5 mr-2" />
              Admin
            </div>
            <div className="flex items-center">
              <LiaCommentSolid className="w-5 h-5 mr-2" />
              31 Comments
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="mb-6">{selectedBlogs?.introduction}</p>
            {selectedBlogs?.mainContent?.map((obj, index) => (
              <p key={index} className="mb-6">
                {obj}
              </p>
            ))}

            <img
              src={selectedBlogs?.secondImage}
              alt="Person using laptop"
              className="w-full mb-6"
            />

            <p>{selectedBlogs.content}</p>
          </div>

          <div className="mt-8">
            <div className=" mb-4">
              <span className="flex items-center gap-5">
                Share : <SocialMediaIcons />
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {[
                "#ArtificialIntelligence",
                "#BusinessAutomation",
                "#MachineLearning",
                "#PredictiveAnalytics",
                "#OperationalEfficiency",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-orange-50 text-orange-500 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/3">
          {/* Search */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Search</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search.."
                className="w-full p-3 pr-10 border rounded-lg focus:outline-none focus:border-orange-500"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-1 rounded">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Recent Blogs */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Recent Blogs
            </h3>
            {blogs.map((obj) => (
              <Link
                to={`/blogs/${obj.pathname}`}
                key={obj.id}
                className="flex gap-4 mb-4"
              >
                <div className="min-w-16 h-16 max-w-20 overflow-hidden bg-gray-100 rounded">
                  <img
                    src={obj.mainImage}
                    alt={`blogs-image-${obj.id}`}
                    className="object-cover min-w-16 h-16 max-w-20"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-orange-500 hover:text-orange-600">
                    {obj.title}
                  </h4>
                  <p className="text-sm text-gray-500">{obj.date}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Categories
            </h3>
            <div className="space-y-2">
              {[
                "Culinary Journeys",
                "Chef&apos;s Corner",
                "Local Ingredients",
                "Festive Feasts",
                "Cooking Adventures",
              ].map((category, index) => (
                <div
                  key={index}
                  className={`p-3 rounded ${
                    index === 0
                      ? "bg-orange-500 text-white"
                      : "bg-orange-50 text-gray-700"
                  }`}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Chef Specialties",
                "Traditional",
                "Bali&apos;s",
                "Culinary",
                "Exploring",
                "Street Food",
                "Indonesian Cuisine",
                "Local Ingredients",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="bg-orange-50 text-orange-500 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
