import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICEID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATEID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState("");
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };
    const form = useRef(null);
    const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs
            .sendForm(serviceId, templateId, form.current!, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    setEmail("");
                    setName("");
                    setMessage("");
                    setSuccess("Message Sent Succesfully");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };
    return (
        <div>
            <p className="text-cyan">{success}</p>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    required
                    className="h-12 rounded-lg bg-lightBrown px-2"
                    value={name}
                    onChange={handleName}
                />
                <input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    required
                    className="h-12 rounded-lg bg-lightBrown px-2"
                    value={email}
                    onChange={handleEmail}
                />
                <textarea
                    name="message"
                    rows={9}
                    cols={50}
                    placeholder="Message"
                    required
                    className=" rounded-lg bg-lightBrown p-2"
                    value={message}
                    onChange={handleMessage}
                />
                <button
                    type="submit"
                    className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
                >
                    Send
                </button>
            </form>
        </div>
    )
}

export default ContactForm