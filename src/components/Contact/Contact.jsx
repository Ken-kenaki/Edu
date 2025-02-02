import React from "react";
import TItle from "../TItle/TItle";
import mail from "../../assets/mail-icon.png";
import call from "../../assets/phone-icon.png";
import location from "../../assets/location-icon.png";


const Contact = () => {
  return (
    <>
      <TItle subtitle="Contact us" title="Get in Touch" />
      <section className="contact flex gap-[10vw] w-[80vw] mx-auto">
        <div className="left flex flex-col gap-5 w-[30vw]">
          <h1>Send us a message</h1>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <div className="inline-flex gap-3 items-center">
            <img src={mail}
            className="w-7"
            alt="" />
            <a href="">
                laxmna@gmail.com
            </a>
          </div>

          <div className="inline-flex gap-3 items-center">
            <img src={call}
            className="w-7"
            alt="" />
            <a href="">
                98212002326
            </a>
          </div>

          <div className="inline-flex gap-3 items-center">
            <img src={location}
            className="w-7"
            alt="" />
            <a href="">
                baneshwor, kathmandu
            </a>
          </div>
        </div>

        <div className="right">
            <form action="" className="flex flex-col gap-5">
                <label htmlFor="name" className="text-gray-700 text-sm">Your name</label>
                <input type="text" placeholder="Enter your name" className="bg-blue-300 p-3 pr-50 focus:outline-none" />

                <label htmlFor="number" className="text-gray-700 text-sm">Phone Number</label>
                <input type="text" placeholder="Enter your number" className="bg-blue-300 p-3 pr-50 focus:outline-none" />
                <label htmlFor="email" className="text-gray-700 text-sm">Email</label>
                <input type="text" placeholder="Enter your Email" className="bg-blue-300 p-3 pr-50 focus:outline-none" />

                <label htmlFor="message" className="text-gray-700 text-sm">Write Your message</label>
                <textarea type="text" placeholder="Enter your message" className="bg-blue-300 p-3 pr-50 focus:outline-none" />
            </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
