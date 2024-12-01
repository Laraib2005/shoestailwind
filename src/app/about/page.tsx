import React from 'react';

const About = () => {
  return (
    <div>
      <section className="about bg-cover bg-center text-white h-screen flex justify-start items-center px-5 sm:px-10" style={{ backgroundImage: "url(about.jpg)" }}>
        <div className="about-content max-w-xl sm:max-w-2xl bg-black bg-opacity-60 p-8 rounded-lg text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg sm:text-xl mt-4">
            Welcome to FOOT WEAR, where style meets comfort in every step. We are passionate about providing high-quality, durable, and fashionable shoes that suits all occasions. Whether you are looking for casual sneakers, elegant formal shoes, or sturdy boots, our diverse collection has something for everyone. 
            <br /><br />
            At FOOT WEAR, we believe that shoes are more than just a necessity; they are a statement of your unique personality and style. Our team is dedicated to sourcing the finest materials and delivering shoes that not only look great but feel amazing. 
            <br /><br />
            We are committed to offering exceptional customer service and ensuring that every pair of shoes you purchase exceeds your expectations. Step into the perfect pair today and experience the difference with FOOT WEAR.
          </p>
        </div>
      </section>
    </div>
  );
};
export default About;
