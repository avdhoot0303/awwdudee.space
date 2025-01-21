import React, { useState } from "react";
import { Input, Textarea, Button, Card, Spacer, Text } from "@nextui-org/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // To display the status of email

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Use SMTP.js to send email
    window.Email.send({
      SecureToken: "YOUR_SECURE_TOKEN", // Replace with the generated token
      To: "your-email@example.com", // Replace with your email
      From: formData.email,
      Subject: `Contact Form Submission from ${formData.name}`,
      Body: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    }).then((response) => {
      if (response === "OK") {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Error sending message. Please try again.");
      }
    });
  };

  return (
    <Card css={{ mw: "500px", p: "$10", margin: "auto" }}>
      <Text h2 css={{ mb: "$5", textAlign: "center" }}>
        Contact Me
      </Text>
      <form onSubmit={handleSubmit}>
        <Input
          clearable
          bordered
          label="Name"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
        />
        <Spacer y={1.5} />
        <Input
          clearable
          bordered
          label="Email"
          placeholder="Enter your email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
        />
        <Spacer y={1.5} />
        <Textarea
          bordered
          label="Message"
          placeholder="Write your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          required
          rows={5}
        />
        <Spacer y={1.5} />
        <Button type="submit" shadow color="primary" fullWidth>
          Send Message
        </Button>
        {status && (
          <Text css={{ mt: "$5", textAlign: "center", color: "#0070f3" }}>
            {status}
          </Text>
        )}
      </form>
    </Card>
  );
};

export default ContactForm;
