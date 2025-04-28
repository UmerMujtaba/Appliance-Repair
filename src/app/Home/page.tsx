"use client";
import MainLayout from "@/components/MainLayout";
import MapWithPins from "@/components/MapWithPins";
import FaqItem from "@/components/QuestionCollapseBar";
import React from "react";

const Home: React.FC = () => {
  const bookingSteps = [
    {
      id: 1,
      heading: "Book Online Or With Phone",
      imageUrl: "../contact_book_ic.png",
      description:
        "Scheduling your service is easy—just give us a call or book online at your convenience. We're here to make it simple and hassle-free.",
    },
    {
      id: 2,
      heading: "We Identify the Problem",
      imageUrl: "../search_ic.png",
      description:
        "Our expert will assess the issue thoroughly to understand exactly what’s going on. No guesswork—just clear, professional diagnostics.",
    },
    {
      id: 3,
      heading: "Our Professional Arrives",
      imageUrl: "../wrench_ic.png",
      description:
        "A certified technician will arrive on time, ready with the tools and knowledge to handle the job. Friendly, punctual, and prepared.",
    },
    {
      id: 4,
      heading: "We Solve Your Problem",
      imageUrl: "../badge_ic.png",
      description:
        "We get to work and take care of the issue efficiently and effectively. Your satisfaction and peace of mind are our top priorities.",
    },
  ];

  const contactDetails = [
    {
      id: 1,
      heading: "Office",
      subHeading: "AC Maintenance Service Company Dubai",
      iconSrc: "./location_ic.png",
    },
    {
      id: 2,
      heading: "Make a call",
      subHeading: "(866) 423 982",
      iconSrc: "./phone_call_ic.png",
    },
    {
      id: 3,
      heading: "Send me email",
      subHeading: "info@example.com",
      iconSrc: "./email_ic.png",
    },
  ];

   const locations = [
        { name: "Dubai", coordinates: { lat: 25.051537, lng:  55.162419 } },
    ];

  return (
    <MainLayout>
      {/* body */}
      <div className="bg-red-500  w-full h-screen">
        {/* TOP SECTION IMAGE AND CONTAINER BOX */}
        <div className="w-full h-[700px] relative ">
          <img
            src="./bg.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="z-10 w-96 bg-white rounded-4xl absolute top-50 left-10 justify-start p-10">
            <h1 className="text-3xl font-bold mb-4 text-black">
              Same day Halifax appliance repair
            </h1>
            <ul className="space-y-4 text-black">
              <li className="flex items-center ">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex justify-center items-center mr-4">
                  ✓
                </span>
                Flexible Call-To-Meet Appointments
              </li>
              <li className="flex items-center">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex justify-center items-center mr-4">
                  ✓
                </span>
                Best warranty on Parts and Labor
              </li>
              <li className="flex items-center">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex justify-center items-center mr-4">
                  ✓
                </span>
                Truck Stocked With Parts
              </li>
            </ul>
            <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">
              Make Appointment
            </button>
          </div>
        </div>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="bg-white items-center justify-center flex flex-col py-24"
        >
          <h1 className="text-3xl font-bold text-black mb-8">About Us</h1>
          <p className="text-black text-md px-4 text-center">
            We offer diverse household & commercial services: appliance repair,
            servicing, installation for any model. Our 24/7 call center ensures
            help in emergencies. Schedule now for swift doorstep assistance!
          </p>
          <div className=" items-center justify-center">
            <div className=" p-6 flex justify-around">
              {/* box 1 */}
              <div className="px-6 items-center flex flex-col">
                <div className="bg-red-500 p-3 rounded-lg ">
                  <img
                    src="../kuwaiti_dinar_ic.png"
                    alt="Kuwaiti Dinar"
                    className="w-7 h-7"
                  />
                </div>
                <h3 className="my-2 text-lg text-black">Transparency</h3>
                <span className="text-center text-black text-md">
                  We are 100% transparent. No more extra bills for 'additional
                  services'. With us, you will always know exactly how much the
                  restoration will cost.
                </span>
              </div>

              {/* box 2 */}

              <div className="px-6 items-center flex flex-col">
                <div className="bg-red-500 p-3 rounded-lg ">
                  <img
                    src="../warranty_ic.png"
                    alt="Kuwaiti Dinar"
                    className="w-7 h-7"
                  />
                </div>
                <h3 className="my-2 text-lg text-black">Complete Warranty</h3>
                <span className="text-center text-black text-md">
                  With 20+ years of experience in appliance repair, you can be
                  sure of the end result. In addition, every repair comes with a
                  3-month warranty.
                </span>
              </div>
              {/* box 3*/}

              <div className="px-6 items-center flex flex-col">
                <div className="bg-red-500 p-3 rounded-lg ">
                  <img
                    src="../licensing_ic.png"
                    alt="Kuwaiti Dinar"
                    className="w-7 h-7"
                  />
                </div>
                <h3 className="my-2 text-lg text-black">
                  Licensed Technicians
                </h3>
                <span className="text-center text-black text-md">
                  Our technicians are capable of dealing with home appliances of
                  any type and manufacturer. We have all the necessary and
                  up-to-date certifications.
                </span>
              </div>
            </div>
          </div>
          <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">
            Make Appointment
          </button>
        </section>

        {/* 2nd IMAGE BACKGROUND */}
        <div className="w-full h-[700px] relative ">
          <img
            src="./bg_image_second.png"
            alt="Background"
            className="w-full h-full object-cover"
          />

          <div className="z-10 w-[500px] bg-white rounded-4xl absolute top-50 right-20 justify-start px-10 py-16">
            <h1 className="text-3xl font-bold mb-4 text-black">
              Your Trusted Appliance Repair Experts
            </h1>
            <span className="text-center text-black font-normal text-md">
              We repair a wide range of home applicances and make sure they work
              smoothly after installation, maintainence and repair. All our
              specialists are well-trained and have certificates to offer home
              appliance repair services.
            </span>
            <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">
              Make Appointment
            </button>
          </div>
        </div>

        {/* SERVCIES SECTION */}
        <section
          id="service"
          className="bg-white items-center justify-center flex flex-col py-20"
        >
          <h1 className="text-3xl font-bold text-black mb-8">Our Services</h1>
          <p className="text-black text-md px-4 text-center">
            Breakdowns of home appliances might make you abandon the course of
            your scheduled plans and cause a tremendous mess in your kitchen or
            bathroom. Fortunatelly, You've reliable helpers
          </p>

          <div
            id="services"
            className="items-center justify-center flex flex-col py-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16 ">
              {/* Service 1 */}
              <div className="bg-[#b8002b] text-white flex flex-col items-center justify-center p-6 rounded-lg w-32 h-40 relative">
                <img
                  src="../kuwaiti_dinar_ic.png"
                  alt="Refrigerator Repair"
                  className="w-12 h-12 mb-2"
                />
                <span className="text-center">Air Conditioner Repair</span>
                <div className="absolute bottom-0 left-4 right-0 h-3 bg-white w-24 rounded-tl-xl rounded-tr-xl"></div>
              </div>
              {/* Service 2 */}
              <div className="bg-[#b8002b] text-white flex flex-col items-center justify-center p-6 rounded-lg w-32 h-40 relative">
                <img
                  src="../kuwaiti_dinar_ic.png"
                  alt="Dishwasher Repair"
                  className="w-12 h-12 mb-2"
                />
                <span className="text-center">Central AC Maintenance</span>
                <div className="absolute bottom-0 left-4 right-0 h-2 bg-white w-24 rounded-tl-xl rounded-tr-xl"></div>
              </div>
              {/* Service 3 */}
              <div className="bg-[#b8002b] text-white flex flex-col items-center justify-center p-6 rounded-lg w-32 h-40 relative">
                <img
                  src="../kuwaiti_dinar_ic.png"
                  alt="Washer Repair"
                  className="w-12 h-12 mb-2"
                />
                <span className="text-center">Washing Machine Repair</span>
                <div className="absolute bottom-0 left-4 right-0 h-2 bg-white w-24 rounded-tl-xl rounded-tr-xl"></div>
              </div>
              {/* Service 4 */}
              <div className="bg-[#b8002b] text-white flex flex-col items-center justify-center p-6 rounded-lg w-32 h-40 relative">
                <img
                  src="../kuwaiti_dinar_ic.png"
                  alt="Dryer Repair"
                  className="w-12 h-12 mb-2"
                />
                <span className="text-center">Fridge Repair</span>
                <div className="absolute bottom-0 left-4 right-0 h-2 bg-white w-24 rounded-tl-xl rounded-tr-xl"></div>
              </div>
              {/* Service 5 */}
              <div className="bg-[#b8002b] text-white flex flex-col items-center justify-center p-6 rounded-lg w-32 h-40 relative">
                <img
                  src="../kuwaiti_dinar_ic.png"
                  alt="Oven Repair"
                  className="w-12 h-12 mb-2"
                />
                <span className="text-center">Freezer Repair</span>
                <div className="absolute bottom-0 left-4 right-0 h-2 bg-white w-24 rounded-tl-xl rounded-tr-xl"></div>
              </div>
              {/* Service 6 */}
              <div className="bg-[#b8002b] text-white flex flex-col items-center justify-center p-6 rounded-lg w-32 h-40 relative">
                <img
                  src="../kuwaiti_dinar_ic.png"
                  alt="Freezer Repair"
                  className="w-12 h-12 mb-2"
                />
                <span className="text-center">Microwave & Oven Repair</span>
                <div className="absolute bottom-0 left-4 right-0 h-2 bg-white w-24 rounded-tl-xl rounded-tr-xl"></div>
              </div>
              {/* Service 7 */}
              <div className="bg-[#b8002b] text-white flex flex-col items-center justify-center p-6 rounded-lg w-32 h-40 relative">
                <img
                  src="../kuwaiti_dinar_ic.png"
                  alt="Range Hood Repair"
                  className="w-12 h-12 mb-2"
                />
                <span className="text-center">Dishwasher Repair</span>
                <div className="absolute bottom-0 left-4 right-0 h-2 bg-white w-24 rounded-tl-xl rounded-tr-xl"></div>
              </div>
              {/* Service 8 */}
              <div className="bg-[#b8002b] text-white flex flex-col items-center justify-center p-6 rounded-lg w-32 h-40 relative">
                <img
                  src="../kuwaiti_dinar_ic.png"
                  alt="Microwave Repair"
                  className="w-12 h-12 mb-2"
                />
                <span className="text-center">Home Appliance Servicing</span>
                <div className="absolute bottom-0 left-4 right-0 h-2 bg-white w-24 rounded-tl-xl rounded-tr-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* same day appliance repair section */}
        <section className="bg-[#2a334a] w-full  flex flex-col  relative   ">
          <div className="bg-[#b8002b] h-40 w-40 rounded-full border-8 border-white absolute left-[46%] top-[-10%] items-center flex justify-center ">
            <img
              src="../repair_ic.png"
              alt="Repair Icon"
              className="w-16 h-16 z-10"
            />

            {/* Curved Text */}
            <svg
              className="absolute"
              width="160"
              height="160"
              viewBox="0 0 160 160"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Path for the top text */}
                <path
                  id="topTextPath"
                  d="M80,20 a60,60 0 1,1 0,120 a60,60 0 1,1 0,-120"
                />
                {/* Path for the bottom text */}
                <path
                  id="bottomTextPath"
                  d="M80,140 a60,60 0 1,1 0,-120 a60,60 0 1,1 0,120"
                />
              </defs>
              {/* Top Text */}
              <text fill="white" fontSize="10" fontWeight="bold">
                <textPath
                  href="#bottomTextPath"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  SAME DAY APPLIANCE REPAIR
                </textPath>
              </text>
              {/* Bottom Text */}
              <text fill="white" fontSize="10" fontWeight="bold">
                <textPath
                  href="#topTextPath"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  100% GUARANTEED
                </textPath>
              </text>
            </svg>
          </div>

          <div className=" mt-26  py-10 items-center flex flex-col justify-center ">
            <h1 className="text-3xl font-bold text-white py-2">
              You pay only the jobs done.
            </h1>
            <h4 className="text-3xl font-bold text-white  py-2 ">
              And Done Well.
            </h4>

            <span className="text-center">
              Need some appliance repair? We're availabe 24/7 to answer your
              questions and address household
              <br /> appliance issues. Our technicians start repairs promptly
              upon appointment.
            </span>

            <div className="py-6 px-4 mt-6  items-center justify-center flex flex-col">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-10 lg:gap-12 relative">
                {bookingSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className="relative flex flex-col items-center text-center max-w-xs"
                  >
                    {/* Icon box */}
                    <div className="bg-[#b8002b] p-4 rounded-lg inline-flex items-center justify-center w-14 h-14 z-10">
                      <img src={step.imageUrl} alt="icon" className="w-6 h-6" />
                    </div>

                    {/* Line: Only show on lg and above */}
                    {index < bookingSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/5 left-68 w-36 h-0.5 bg-white transform -translate-y-1/2" />
                    )}

                    {/* Title & Description */}
                    <h3 className="text-white text-lg font-semibold mt-4 mb-2">
                      {step.heading}
                    </h3>
                    <p className="text-white text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
              <button className="mt-12 bg-[#b8002b] text-white px-6 py-2 rounded-lg hover:bg-red-700">
                Make Appointment
              </button>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-white w-full py-12 relative" id="testimonials">
          <div className="flex flex-col items-center py-10">
            <h1 className="text-3xl font-bold text-black mb-8">Testimonials</h1>
            <p className="text-black text-md px-4 text-center">
              Read reviews about our repair, installation and maintenance
              services <br /> Our trained experts are always ready to help
            </p>

            <div className="flex items-center justify-center gap-x-12 my-6">
              <div className="bg-white relative p-6 my-6 w-[25%] h-56 rounded-lg flex flex-col justify-between shadow-2xl">
                <div className="flex space-x-2 absolute -top-2 left-6">
                  <div className="w-3 h-7 bg-[#D72649] clip-custom"></div>
                  <div className="w-3 h-7 bg-[#D72649] clip-custom"></div>
                </div>

                <p className="text-black text-md">
                  Booking was straightforward, and the technician arrived on
                  time. He was professional, explained the problem clearly, and
                  had everything fixed quickly.
                </p>
                <div className="flex flex-col gap-1">
                  <span className="text-black font-semibold">Sarah Fisher</span>
                  <span className="text-black font-normal">Customer</span>
                </div>
              </div>
              <div className="bg-white relative p-6 my-6 w-[25%] h-56 rounded-lg flex flex-col justify-between  shadow-2xl">
                <div className="flex space-x-2 absolute -top-2 left-6">
                  <div className="w-3 h-7 bg-[#D72649] clip-custom"></div>
                  <div className="w-3 h-7 bg-[#D72649] clip-custom"></div>
                </div>

                <p className="text-black text-md">
                  Booking was straightforward, and the technician arrived on
                  time. He was professional, explained the problem clearly, and
                  had everything fixed quickly.
                </p>
                <div className="flex flex-col gap-1">
                  <span className="text-black font-semibold">Sarah Fisher</span>
                  <span className="text-black font-normal">Customer</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="bg-white w-full pb-20 relative" id="faqs">
          <div className="flex flex-col items-center py-10">
            <h1 className="text-3xl font-bold text-black mb-8">
              Frequently Asked Questions
            </h1>
            <p className="text-black text-md px-4 text-center">
              We've compiled FAQs for your convenience. If your question isn't
              listed
              <br />
              contact us via phone or email for a knowledgeable response.
            </p>
          </div>
          <div className="max-w-6xl mx-auto  px-4 py-6 flex flex-col items-center justify-center">
            <FaqItem
              question="How much does appliance repair typically cost in the U.S.?"
              answer="Most repairs cost between $100 and $400, depending on the appliance and the issue. We’ll always give you a clear quote before starting."
            />
            <FaqItem
              question="Is it better to repair or replace my appliance?"
              answer="If the repair costs less than half the price of a new appliance and it’s under 10 years old, repair is usually worth it. We’ll help you choose the best option."
            />
            <FaqItem
              question="Can the manufacturer repair my appliance, or should I call a local service?"
              answer="Manufacturers can help if it’s under warranty, but local repair is often quicker and more affordable. We also service most major brands."
            />
            <FaqItem
              question="What should I do if my appliance won’t turn on?"
              answer="Check the power, plug, and breaker. If that doesn’t fix it, contact us and we’ll diagnose the issue."
            />
            <FaqItem
              question="Do your appliance repair services come with a warranty?"
              answer="Yes, we offer a 30–90 day warranty on parts and labor. If anything goes wrong, we’ll make it right."
            />
          </div>
        </section>

        <MapWithPins locations={locations} />

        <section
          className="bg-[#2a334a] w-full  flex flex-col  relative items-center py-16"
          id="contact"
        >


          
          <h1 className="text-3xl font-bold text-white mb-8">Contact us</h1>
          <p className="text-white text-md px-4 text-center mb-8">
            Our customer service representatives opreate 24 hours including
            weekends & holidays. If you
            <br />
            have any questions at all, feel free to give us as call at the
            number provided.
          </p>

          <div className="flex flex-row  w-full py-4 items-center justify-evenly">
            {contactDetails.map((step, index) => (
              <div
                key={step.id}
                className="relative flex flex-col items-center  "
              >
                {/* Icon box */}
                <div className="bg-[#b8002b] p-4 rounded-lg  items-center justify-center w-14 h-14 z-10">
                  <img src={step.iconSrc} alt="icon" className="w-6 h-6" />
                </div>

                {/* Line: Only show on lg and above */}
                {/* Title & Description */}
                <h3 className="text-white text-lg font-semibold mt-2">
                  {step.heading}
                </h3>
                <p className="text-white text-sm w-40 text-center">
                  {step.subHeading}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center">
            <form className="w-3xl text-black">
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-4 rounded-md bg-white h-14 focus:outline-none"
                  />
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-4 rounded-md bg-white h-14 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full p-4 rounded-md bg-white h-14 focus:outline-none"
                  />
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <select
                    name="Select Services"
                    id="cars"
                    className="w-full p-4 rounded-md bg-white h-14 focus:outline-none appearance-auto"
                  >
                    <option value="refrigeratorRepair">
                      Refrigerator Repair
                    </option>
                    <option value="washingMachineRepair">
                      Washing Machine Repair
                    </option>
                    <option value="dryerRepair">Dryer Repair</option>
                    <option value="dishwasherRepair">Dishwasher Repair</option>
                    <option value="ovenStoveRepair">Oven / Stove Repair</option>
                    <option value="microwaveRepair">Microwave Repair</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <textarea
                  placeholder="Home Address"
                  className="w-full p-4 rounded-md bg-white focus:outline-none"
                ></textarea>
              </div>

              <div className="">
                <button
                  type="submit"
                  className="bg-[#b8002b] text-white px-4 py-3 rounded-md font-medium hover:bg-red-700 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        <footer className="bg-[#b8002b]">
          <div className="px-20 py-6 flex justify-between">
            <span>&copy; 2024 Appliance Repair</span>
            <div className=" flex justify-around w-56">
              <img src="./facebook_ic.png" alt="Facebook" className="w-6 h-6" />
              <img
                src="./instagram_ic.png"
                alt="Instagram"
                className="w-6 h-6"
              />
              <img src="./twitter_ic.png" alt="Twitter" className="w-6 h-6" />
            </div>
          </div>
        </footer>
      </div>
    </MainLayout>
  );
};






export default Home;

//  {
//    /* Service 9 */
//  }
//  <div className="bg-[#b8002b] text-white flex flex-col items-center justify-center p-6 rounded-lg w-32 h-40 relative">
//    <img
//      src="../kuwaiti_dinar_ic.png"
//      alt="Gas Appliance Repair"
//      className="w-12 h-12 mb-2"
//    />
//    <span className="text-center">Gas Appliance Repair</span>
//    <div className="absolute bottom-0 left-4 right-0 h-2 bg-white w-24 rounded-tl-xl rounded-tr-xl"></div>
//  </div>;
//  {
//    /* Service 10 */
//  }
//  <div className="bg-[#b8002b] text-white flex flex-col items-center justify-center p-6 rounded-lg w-32 h-40 relative">
//    <img
//      src="../kuwaiti_dinar_ic.png"
//      alt="Stove Repair"
//      className="w-12 h-12 mb-2"
//    />
//    <span className="text-center">Stove Repair</span>
//    <div className="absolute bottom-0 left-4 right-0 h-2 bg-white w-24 rounded-tl-xl rounded-tr-xl"></div>
//  </div>;
