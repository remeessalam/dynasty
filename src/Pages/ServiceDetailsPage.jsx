import servicelayouthelp from "../assets/image/servicelayouthelp.png";
import PageBanner from "../Components/PageBanner";
import { allServices } from "../data/constant";
import { Link, useParams } from "react-router-dom";
export default function ServiceDetailsPage() {
  const { service } = useParams();

  const selectedService = allServices.find((obj) => obj.pathname === service);

  if (!selectedService) {
    return <div>Service not found</div>;
  }
  return (
    <>
      <PageBanner
        page={selectedService.title}
        bannerImage={selectedService.bannerImage}
      />
      <div className="container mx-auto px-4 py-[5rem]">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="mb-8">
              <h2 className="font-bold mb-4">Services Category</h2>
              <div className="flex flex-col gap-2">
                {allServices.map((obj) => (
                  <Link
                    key={obj.id}
                    to={`/services/${obj.pathname}`}
                    className={`text-left px-4 py-2 rounded transition-colors ${
                      obj?.pathname === service
                        ? "bg-[#E86C37] text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {obj.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Need Help Section */}
            <div className="bg-[#FFD68A] p-6 rounded-lg text-center">
              <h3 className="font-bold mb-4">Need Any Help?</h3>
              <div className="mb-4">
                <img
                  src={servicelayouthelp}
                  alt="Help Icon"
                  className="w-20 h-20 mx-auto rounded-full"
                />
              </div>
              <div className="mb-4">
                <p>+91 XXXXX-XXXXX</p>
              </div>
              <button className="bg-[#E86C37] text-white px-6 py-2 rounded">
                CONTACT NOW
              </button>
            </div>

            {/* Download Section */}
            <div className="mt-8">
              <h3 className="font-bold mb-4">Download</h3>
              <div className="flex flex-col gap-2">
                <button className="bg-[#FFD68A] px-4 py-2 rounded text-left">
                  Download 01
                </button>
                <button className="bg-[#FFD68A] px-4 py-2 rounded text-left">
                  Download 02
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="grid md:grid-cols-1 gap-8">
              <div>
                <img
                  src={selectedService.mainImage}
                  alt="AI Development Illustration"
                  className="w-full h-auto max-h-[70vh] object-cover rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-6">
                  {selectedService.title}
                </h1>
                <p className="mb-6">{selectedService.intro}</p>
                <h2 className="text-2xl font-bold mb-4">
                  {selectedService?.section1.heading}
                </h2>
                <p className="mb-6">{selectedService?.section1.content}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {selectedService?.keyHighlights?.map((obj, index) => (
                <div
                  key={obj.title}
                  className={`${
                    index % 2 === 1 ? `bg-[#E86C37] text-white` : `bg-white`
                  } shadow-lg p-6 rounded-lg`}
                >
                  <h3 className="font-bold mb-4">{obj.title}</h3>
                  <p>{obj.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="mb-8">{selectedService?.closingSection?.intro}</p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedService.secondImage}
                    alt="Analytics Dashboard"
                    className="w-full h-auto rounded-lg mb-4"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  {selectedService.closingSection.features.map((obj) => (
                    <div key={obj.name}>
                      <h3 className="font-bold mb-2">{obj.name}</h3>
                      <p>{obj.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-8">{selectedService?.closingSection?.cta}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
