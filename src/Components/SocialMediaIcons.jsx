import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialMediaIcons = () => {
  const platforms = [
    { name: "YouTube", icon: <FaYoutube /> },
    { name: "Facebook", icon: <FaFacebookF /> },
    { name: "Instagram", icon: <FaInstagram /> },
    { name: "Twitter", icon: <FaTwitter /> },
    { name: "LinkedIn", icon: <FaLinkedinIn /> },
  ];

  return (
    <div className="flex gap-3">
      {platforms.map((platform) => (
        <button
          key={platform.name}
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-orange-500 hover:text-white flex items-center justify-center"
          aria-label={platform.name}
        >
          {platform.icon}
        </button>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
