import { useState, useRef } from "preact/hooks";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [isMessageSent, setIsMessageSent] = useState(false);
  const envVariable = import.meta.env;
  const form = useRef();
  const commonStyle = {
    color: "#0099fe",
  };
  // EmailJs
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        envVariable.VITE_SERVICE_ID,
        envVariable.VITE_TEMPLATE_ID,
        form.current,
        envVariable.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsMessageSent(true);
          alert("Message sent successfully");
          form.current.reset();
        },
        (error) => {
          alert("Message not sent");
        }
      )
      .finally(() => {
        setIsMessageSent(false);
      });
  };
  return (
    <>
      {/* get in touch */}
      <div id="get-in-touch" class="flex flex-col items-center p-8">
        <div class="mb-10">
          <h2 class="text-3xl font-bold" style={commonStyle}>
            GET IN TOUCH
          </h2>
        </div>
        <div
          class="bg-gray-200 p-4 rounded-lg hover:drop-shadow-lg transition-all"
          style={{ width: "80%" }}
        >
          <div class="flex flex-wrap items-center mb-4 gap-2">
            <div class="flex items-center flex-wrap">
              <img
                src="assets\images\info1.png"
                alt="Phone"
                class="w-10 drop-shadow-lg"
              />
              <span class="pl-2 font-bold">Phone: </span>
              <span class="pl-3">{envVariable.VITE_PHONE}</span>
            </div>
          </div>
          <div class="flex flex-wrap items-center mb-4 gap-2">
            <div class="flex items-center flex-wrap">
              <img
                src="assets\images\info2.png"
                alt="Email"
                class="w-10 drop-shadow-lg"
              />
              <span class="pl-2 font-bold">Email: </span>
              <span class="pl-3 break-all">{envVariable.VITE_EMAIL}</span>
            </div>
          </div>
          <div class="flex flex-wrap items-center mb-4 gap-5">
            <div class="flex items-center flex-wrap">
              <img
                src="assets\images\info3.png"
                alt="Address"
                class="w-10 drop-shadow-lg"
              />
              <span class="pl-2 font-bold">Address:</span>
              <span class="pl-3">{envVariable.VITE_ADDRESS}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" class="flex flex-col items-center p-8">
        <div class="mb-10">
          <h2 class="text-3xl font-bold" style={commonStyle}>
            CONTACT
          </h2>
        </div>

        <form
          class="bg-white rounded-md"
          style={{ width: "80%" }}
          action="#"
          ref={form}
          onSubmit={sendEmail}
        >
          <div class="mb-4">
            <label for="name" class="block font-medium text-gray-700">
              Name:
            </label>

            <input
              type="text"
              id="name"
              name="user_name"
              value=""
              required
              class="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-opacity-50 focus:outline-none"
            />
          </div>

          <div class="mb-4">
            <label for="email" class="block font-medium text-gray-700">
              Email:
            </label>

            <input
              type="email"
              id="email"
              name="user_email"
              value=""
              required
              class="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-opacity-50 focus:outline-none"
            />
          </div>

          <div class="mb-4">
            <label for="message" class="block font-medium text-gray-700">
              Message:
            </label>

            <textarea
              id="message"
              name="message"
              value=""
              rows={4}
              class="w-full px-3 py-2 mt-1 border rounded-md resize-none focus:ring focus:ring-opacity-50 focus:outline-none"
            ></textarea>
          </div>

          <div class="text-center">
            <input
              type="submit"
              value="Send"
              class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none cursor-pointer hover:drop-shadow-lg transition-all"
            />
          </div>
        </form>
      </div>
    </>
  );
}
