import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, name, subject, message } = formData;

    if (!email || !name || !subject || !message) {
      alert('Please fill out all fields.');
      return;
    }

    // Example: Log the form data
    console.log('Form submitted:', formData);
    alert('Thank you! Your message has been sent.');

    // Clear form
    setFormData({
      email: '',
      name: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 py-12 scroll-mt-24 text-white"
    >
      <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center">Contact</h2>
      <p className="text-gray-300 text-lg mb-10 text-center max-w-xl">
        Feel free to reach out to me for any questions or opportunities!
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-[#0d0d1f] text-white w-full max-w-lg p-8 rounded-2xl shadow-2xl space-y-5"
      >
        <h3 className="text-2xl font-semibold mb-2">Email Me 🚀</h3>

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-400"
        />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-400"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-400"
        />

        <textarea
          name="message"
          rows={5}
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-400"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-fuchsia-600 hover:bg-fuchsia-700 transition duration-300 text-white font-bold rounded-xl"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
