import { AiOutlineHeart } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="py-4 bg-gray-100">
      <p className="flex justify-center items-center">
        Made with <AiOutlineHeart className="mx-1" /> by{" "}
        <a
          className="ml-1"
          href="https://javiervallejo.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Javito (el calvo de la foto de arriba)
        </a>
      </p>
    </div>
  );
};

export default Footer;
