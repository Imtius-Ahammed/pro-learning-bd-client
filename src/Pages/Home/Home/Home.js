import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer/Footer";
import Header from "../../Shared/Header/Header";
import myimg from '../../../Assets/Images/my.jpg'

const Home = () => {
  return (
    <div>
      <Header></Header>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-full mx-auto">
            <div className="rounded-lg overflow-hidden">
              <img
                alt="content"
                className=" w-100 "
                src="https://img.freepik.com/free-vector/code-testing-cartoon-banner-functional-test-methodology-programming-search-errors-bugs-website-platform-development-dashboard-usability-optimization-computer-pc-vector-illustration_107791-3766.jpg?w=1380&t=st=1666716956~exp=1666717556~hmac=db59c48848fa6c0b754a4e8a201a636ebe096f6c41e9493cf60cf37063170bb0"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img className="rounded-full" src={myimg} alt="" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium text-2xl title-font mt-4 text-info">
                   Md Imtius Ahammed
                  </h2>
                  <div className="w-12 h-1 bg-info rounded mt-2 mb-4"></div>
                  <p className="text-base text-white">
                  Dedicated and efficient full stack developer with 6+ years experience in application layers, presentation layers, and databases. Certified in both F/E and B/E technologies. Spearheaded successful transition from LAMP stack to MEAN which cut latency by 40% and increased effectiveness of database administrators by 20%. Seeking to further improve HTML5 and CSS3 skills as the future full stack developer at Atmospheric Solutions.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h3 className="text-2xl text-info">About Web Development</h3>
                <p className="leading-relaxed text-lg mb-4 text-white">
                  
                  Web development is the building and maintenance of websites;
                  it’s the work that happens behind the scenes to make a website
                  look great, work fast and perform well with a seamless user
                  experience. Web developers, or ‘devs’, do this by using a
                  variety of coding languages. The languages they use depends on
                  the types of tasks they are preforming and the platforms on
                  which they are working. Web development skills are in high
                  demand worldwide and well paid too – making development a
                  great career option. It is one of the easiest accessible
                  higher paid fields as you do not need a traditional university
                  degree to become qualified. The field of web development is
                  generally broken down into front-end (the user-facing side)
                  and back-end (the server side). Let’s delve into the details.
                </p>
                <Link
                  to="/courses"
                  className=" text-2xl text-info inline-flex items-center"
                >
                 All Courses
                  <svg
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
