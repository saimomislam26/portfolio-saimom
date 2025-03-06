import ContactInfo from "./ContactInfo"
import ContactSocial from "./ContactSocial"

import email from '../../assets/images/email-image.png'

const ContactMeRight = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12">
       <img
        src={email}
        alt="email image"
        className="max-w-[300px]"
      />
      <ContactInfo/>
      <ContactSocial/>
    </div>
  )
}

export default ContactMeRight