import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
    <SingleInfo text="saimomislam1107@gmail.com" image={HiOutlineMail} />
    <SingleInfo text="+880 18712 66651" image={FiPhone} />
    <SingleInfo text="Mirpur-6, Dhaka, Bangladesh" image={IoLocationOutline} />
  </div>
  )
}

export default ContactInfo