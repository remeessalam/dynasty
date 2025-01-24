import blogone from "../assets/image/blogs/blogone.png";
import blogone2 from "../assets/image/blogs/blogone2.png";
const BlogDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8 py-[5rem]">
      {/* Main Content Area */}
      <div className="w-full md:w-2/3">
        <img src={blogone} alt="Person using tablet" className="w-full mb-6" />

        <div className="flex items-center gap-4 text-gray-600 mb-6">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            August 3, 2023
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Admin
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            31 Comments
          </div>
        </div>

        <div className="prose max-w-none">
          <p className="mb-6">
            In today&apos;s rapidly evolving digital landscape, businesses are
            under constant pressure to optimize their operations, enhance
            customer experiences, and make data-driven decisions. Traditional
            methods can no longer keep up with the pace and complexity of modern
            business environments. This is where Artificial Intelligence (AI)
            steps in as a game-changer.
          </p>

          <p className="mb-6">
            AI isn&apos;t just a buzzword anymore; it&apos;s an integral part of
            the technological revolution driving business innovation. From
            predictive analytics to natural language processing (NLP), AI
            solutions are reshaping industries, automating processes, and
            creating smarter, more efficient systems that enable businesses to
            stay competitive.
          </p>

          <p className="mb-6">
            At [Your Company Name], we specialize in building custom AI
            solutions that help businesses unlock the full potential of their
            data. Let&apos;s take a deeper dive into how AI is revolutionizing
            business operations and decision-making.
          </p>

          <p className="mb-6">
            The cornerstone of any successful business lies in its ability to
            make informed decisions. AI makes this process smarter and more
            effective by analyzing vast amounts of data in real-time. Where
            human decision-making might take time, AI systems can sift through
            complex data sets and provide actionable insights almost
            instantaneously.
          </p>

          <img
            src={blogone2}
            alt="Person using laptop"
            className="w-full mb-6"
          />

          <p>
            One of the most significant advantages of AI is its ability to
            automate repetitive tasks, freeing up human resources to focus on
            more strategic and creative work. Tasks like data entry, customer
            support, and inventory management can all be automated through AI
            systems. This results in faster processes, fewer errors, and
            significant cost savings. At [Your Company Name], we build AI-driven
            automation systems that streamline operations across various
            industries.
          </p>
        </div>

        <div className="mt-8">
          <div className="text-gray-600 mb-4">Share :</div>
          <div className="flex gap-3">
            {["email", "facebook", "instagram", "twitter", "linkedin"].map(
              (platform) => (
                <button
                  key={platform}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-orange-500 hover:text-white flex items-center justify-center"
                >
                  <span className="sr-only">{platform}</span>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </button>
              )
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
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
          {[
            {
              title: "Spice Route: Exploring the Aromas of Local Ingredients",
              date: "August 3, 2023",
            },
            {
              title:
                "Revealing the Secrets of Typical Cuisine Indonesian Culinary",
              date: "August 3, 2023",
            },
            {
              title: "Street Food Made Must-Try Delicacies on Sidewalks",
              date: "August 3, 2023",
            },
          ].map((blog, index) => (
            <div key={index} className="flex gap-4 mb-4">
              <div className="w-16 h-16 bg-gray-100 rounded"></div>
              <div>
                <h4 className="font-medium text-orange-500 hover:text-orange-600">
                  {blog.title}
                </h4>
                <p className="text-sm text-gray-500">{blog.date}</p>
              </div>
            </div>
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
  );
};

export default BlogDetails;
