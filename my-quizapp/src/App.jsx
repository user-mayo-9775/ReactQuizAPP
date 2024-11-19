import "./App.css";
import { Link } from "react-router-dom";
import quizImage from "../src/img/Quiz.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useState } from "react";
import RecentActivity from "./Components/RecentActivity";


function App() {
  const [Loading, setloading] = useState(false);
  return (
    <section className="bg-slate-100">
      <div
        className="w-[80vw] h-[50vh] border border-blue-300 mx-auto my-0"
        style={{
          backgroundImage: `url(${quizImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="w-[80vw] h-[110vh] border-blue-300 shadow-md border mt-5 mx-auto my-0 rounded-xl">
        <h1 className="text-lg font-semibold text-stone-950 text-center my-4">
          Quiz Category
          <div>
            <span className="inline-block h-1 w-28 rounded bg-indigo-500 text-center"></span>
          </div>
        </h1>

        <container>
          <section class="text-gray-600 body-font">
            <div class="container px-5  mx-auto">
              <div class="flex flex-wrap -m-4">
                <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div class=" content h-full bg-white rounded-lg shadow-md text-center p-6">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: "url('https://i.gifer.com/6HY.gif')",
                        filter: "blur(8px)",
                        zIndex: -1,
                      }}
                    ></div>
                    <img
                      alt="testimonial"
                      class="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src="https://i.gifer.com/6HY.gif"
                    />
                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                      General Knowledge
                    </h2>
                    <button class="button-85" role="button">
                      <Link class="quizbutton" to="/GeneralQuestion">
                        Start
                      </Link>
                    </button>
                  </div>
                </div>
                <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div class=" content h-full bg-white rounded-lg shadow-md text-center p-6">
                  <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: "url('https://i.gifer.com/3SLF.gif')",
                        filter: "blur(8px)",
                        zIndex: -1,
                      }}
                    ></div>
                    <img
                      alt="testimonial"
                      class="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src="https://i.gifer.com/3SLF.gif"
                    />

                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                      Science & Nature
                    </h2>
                    <button class="button-85" role="button">
                      <Link class="quizbutton" to="/NatureQuestion">
                        Start
                      </Link>
                    </button>
                  </div>
                </div>

                <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div class=" content h-full bg-white rounded-lg shadow-md text-center p-6">
                  <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: "url('https://i.gifer.com/7Cvv.gif')",
                        filter: "blur(8px)",
                        zIndex: -1,
                      }}
                    ></div>
                    <img
                      alt="testimonial"
                      class="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src="https://i.gifer.com/7Cvv.gif"
                    />
                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                      Geography
                    </h2>

                    <button class="button-85" role="button">
                      <Link class="quizbutton" to="/GeographyQuestion">
                        Start
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="text-gray-600 body-font">
            <div class="container px-5  mx-auto">
              <div class="flex flex-wrap -m-4">
                <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div class=" content h-full bg-white rounded-lg shadow-md text-center p-6">
                  <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: "url('https://i.gifer.com/pXp.gif')",
                        filter: "blur(8px)",
                        zIndex: -1,
                      }}
                    ></div>
                    <img
                      alt="testimonial"
                      class="w-20 h-20 mb-4 object-cover object-bottom rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src="https://i.gifer.com/pXp.gif"
                    />
                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                      Sports
                    </h2>
                    <button class="button-85" role="button">
                      <Link class="quizbutton" to="/SportQuestion">
                        Start
                      </Link>
                    </button>
                  </div>
                </div>
                <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div class=" content h-full bg-white rounded-lg shadow-md text-center p-6">
                  <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: "url('https://i.gifer.com/7zHX.gif')",
                        filter: "blur(8px)",
                        zIndex: -1,
                      }}
                    ></div>
                    <img
                      alt="testimonial"
                      class="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src="https://i.gifer.com/7zHX.gif"
                    />
                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                      Vehicles
                    </h2>
                    <button class="button-85" role="button">
                      <Link class="quizbutton" to="/Question">
                        Start
                      </Link>
                    </button>
                  </div>
                </div>
                <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div class=" content h-full bg-white rounded-lg shadow-md text-center p-6">
                  <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: "url('https://i.gifer.com/9lfC.gif')",
                        filter: "blur(8px)",
                        zIndex: -1,
                      }}
                    ></div>
                    <img
                      alt="testimonial"
                      class="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src="https://i.gifer.com/9lfC.gif"
                    />
                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                      Entertainment
                    </h2>
                    <button class="button-85" role="button">
                      <Link class="quizbutton" to="/EntertainmentQuestion">
                        Start
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </container>
      </div>

      <RecentActivity/>

      {/*      
      {allquestion && allquestion.length > 0 ? (
        allquestion.map((mera, index) => (
          <div key={index}>{mera.question}</div>
          ))
          ) : (
            <p className="text-center text-gray-500">Loading questions...</p>
            )} */}
    </section>
  );
}
export default App;
