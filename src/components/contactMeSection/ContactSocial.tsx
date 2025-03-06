import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/saimom-islam-5023b5183/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/saimomislam26" Icon={FiGithub} />
      <SingleContactSocial link="https://leetcode.com/u/Saimom_islam26/" Icon={SiLeetcode} />
    </div>
  );
};

export default ContactSocial;