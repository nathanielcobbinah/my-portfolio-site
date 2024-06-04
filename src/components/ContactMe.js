import React from 'react';
import ScrollRevealText from './ScrollRevealText';

function ContactMe() {
  return (
    <section id="contact" className="py-20 mx-5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-red-500">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollRevealText>
            <form 
                    method='POST'
                    action='https://formspree.io/f/mleqkadn'
                    className="shadow-md rounded-md px-8 pt-6 pb-8 ring-2 ring-blue-950">
               <div className="mb-4">
               <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
               <input id="name" type="text" name="name" placeholder="Your Name"  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
               </div>
               <div className="mb-4">
               <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
               <input id="email" type="email" name="email" placeholder="Your Email Address" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
               </div>
               <div className="mb-4">
               <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
               <textarea id="message" name="message" placeholder="Your Message" rows="4" className="w-full p-2 border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
               </div>
               <div>
               <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send Message</button>
               </div>
            </form>
          </ScrollRevealText>
          <div className="shadow-md rounded-md p-8 ring-2 ring-blue-950 relative">
            <h3 className="text-red-300 text-xl font-bold mb-4">Contact Information</h3>
            <p className="text-gray-500"><span className="font-bold">Email:</span> nathanielescade@gmail.com</p>
            <p className="text-gray-500"><span className="font-bold">Phone:</span> + (233) 200 209 205</p>
            <p className="text-gray-500"><span className="font-bold">Address:</span> 124 Street, Sunyani, Ghana</p>
            <ScrollRevealText>
               <img src='images/nat-preview.png' className='w-52 float-right mt-10 md:w-full md:max-w-xs' />
            </ScrollRevealText>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;