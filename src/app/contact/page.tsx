import React from 'react'

const Contact = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <section className="contact-form bg-white p-8 shadow-lg rounded-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
                <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
                <form>
                    <input
                        type="text"
                        placeholder="Full Name"
                        required
                        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        required
                        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={5}
                        required
                        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#05447e] text-white font-bold rounded-md hover:bg-[#337ccf] transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </section>
        </div>
    )
}

export default Contact;
