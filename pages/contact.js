import React from "react";
import { InlineWidget,PopupButton } from "react-calendly";
import Header from "../components/Header"; // Include your existing header
import Footer from "../components/Footer"; // Include your existing footer
import Socials from "../components/Socials";
const Contact = () => {
    return (
        <div className="container mx-auto p-6 ">
            <Header isBlog/>
            <div className="mt-5">
                <Socials />
              </div>
            <div className="mt-10 text-center align-items:center">
                <h1 className="text-3xl font-bold mb-4">Schedule an Appointment</h1>
                <p className="text-lg text-gray-400 dark:text-gray-100 mb-6">
                    Choose a time that works best for you, and lets connect!
                </p>
            </div>
      
              
            <div className="bg-white dark:bg-slate-800  p-6 rounded-lg shadow-lg">
                {/* Embed Calendly */}
                <InlineWidget
                    url="https://calendly.com/avdhootpatil245/getting-started" // Replace with your Calendly URL
                    styles={{
                        height: "500px",
                        width: "100%",
                    }}
                />
            </div>

        </div>
    );
};

export default Contact;
