import Logo from "@/assets/Logo.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Thank you for considering EVOGYM for your fitness journey. Our team
            is dedicated to providing you with the best possible fitness
            experience, and we look forward to helping you achieve your goals.
            For more information about our facilities, classes, and membership
            options, please visit our website or speak to one of our friendly
            staff members.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h1 className="font-bold">Links</h1>
          <ul className="mt-1">
            <li className="mb-2">
              <a href="https://www.linkedin.com/in/patrickgip94/">
                <BsLinkedin className="h-8 w-8" />
              </a>
            </li>
            <li>
              <a href="https://github.com/patrickgip94/EvoGym">
                <BsGithub className="h-8 w-8" />
              </a>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
