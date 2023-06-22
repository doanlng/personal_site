import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
        <h3 className="flex justify-center text-6xl py-5 font-bold text-white">Contact Me</h3>
         <form className="max-w-sm mx-auto bg-black bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
            <label htmlFor="name" className="block text-white text-sm font-bold mb-2">Name</label>
            <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-black bg-opacity-50"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Email</label>
            <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-black bg-opacity-50"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="message" className="block text-white text-sm font-bold mb-2">Message</label>
            <textarea
            id="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-black bg-opacity-50"
            placeholder="Enter your message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            ></textarea>
        </div>
        <div className="flex items-center justify-center">
            <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-900 text-white hover:scale-120 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-opacity-70 "
            >
            Submit
            </button>
        </div>
        </form>
    </div>
  );
};

export default ContactForm;
