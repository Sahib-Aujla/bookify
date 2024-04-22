import Heading from "./Heading";
import Button from "./Button";
import { useState } from "react";
import { useSendMessageMutation } from "../store/apiSlice";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [sendMessage] = useSendMessageMutation();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await sendMessage(formData); // Pass formData object
        // Handle success
       
    } catch (error) {
        // Handle error
    }
  };
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <Heading
                className="md:max-w-md lg:max-w-2xl"
                title="Browse Our Extensive Library"
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="my-4">
                <textarea
                  placeholder="Message*"
                  name="message"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex items-center justify-center w-full">
                <Button type="submit" className="hidden lg:flex w-96">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
