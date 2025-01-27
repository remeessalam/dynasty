import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import team1 from "../assets/image/team/team1.png";
import team2 from "../assets/image/team/team2.png";
import team3 from "../assets/image/team/team3.png";
import ourteambgimage from "../assets/image/team/ourteambgimage.png";
const teamMembers = [
  {
    image: team1,
    name: "Name",
    role: "Role",
  },
  {
    image: team2,
    name: "Name",
    role: "Role",
  },
  {
    image: team3,
    name: "Name",
    role: "Role",
  },
];

const SocialLinks = () => (
  <div className="flex items-center justify-center gap-4 mt-4">
    <a
      href="#"
      className="w-8 h-8 rounded-full border border-[#E86C2C] flex items-center justify-center group hover:bg-[#E86C2C] transition-colors"
    >
      <FaFacebookF className="text-[#E86C2C] group-hover:text-white w-4 h-4" />
    </a>
    <a
      href="#"
      className="w-8 h-8 rounded-full border border-[#E86C2C] flex items-center justify-center group hover:bg-[#E86C2C] transition-colors"
    >
      <FaInstagram className="text-[#E86C2C] group-hover:text-white w-4 h-4" />
    </a>
    <a
      href="#"
      className="w-8 h-8 rounded-full border border-[#E86C2C] flex items-center justify-center group hover:bg-[#E86C2C] transition-colors"
    >
      <FaLinkedinIn className="text-[#E86C2C] group-hover:text-white w-4 h-4" />
    </a>
  </div>
);

export default function TeamSection() {
  return (
    <div className="relative min-h-screen py-12">
      <div className="">
        {/* Header */}
        <div className="text-center mb-20 wrapper">
          <div className="inline-flex flex-col items-center" data-aos="fade-up">
            <span className="text-[#E86C2C] font-medium mb-2">OUR TEAM</span>
            <div className="w-12 h-0.5 bg-[#E86C2C]"></div>
          </div>
          <h2
            data-aos="fade-up"
            className="mt-8 text-4xl md:text-5xl lg:text-6xl font-serif text-center max-w-4xl mx-auto leading-tight"
          >
            Driven by Expertise, United by Innovation.
          </h2>
          {/* <div className="flex justify-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-[#E86C2C]"></div>
            <div className="w-2 h-2 rounded-full bg-[#E86C2C]"></div>
            <div className="w-2 h-2 rounded-full bg-[#E86C2C]"></div>
          </div> */}
        </div>

        {/* Team Grid */}
        <div
          className="bg-current bg-cover py-[5rem]"
          style={{ backgroundImage: `url(${ourteambgimage})` }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto ">
            {teamMembers.map((member, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl text-[#E86C2C] font-serif">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mt-1">{member.role}</p>
                  <SocialLinks />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
