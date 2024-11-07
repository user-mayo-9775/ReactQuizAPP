import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import quizImage from '../src/img/Quiz3.jpeg';
import QuizApp from './Home';

function App2() {
  return (
    <Router>
      <section className='bg-slate-100'> 
        <div
          className="w-[80vw] h-[60vh]  mx-auto my-0"
          style={{
            backgroundImage: `url(${quizImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="w-[80vw] h-[60vh] border-blue-300 shadow-md border mt-5 mx-auto my-0 rounded-xl">
          <h1 className='text-lg font-semibold text-stone-950 text-center my-4'>
            Quiz Category
            <div>
              <span className="inline-block h-1 w-28 rounded bg-indigo-500 mb-4 text-center"></span>
            </div>
          </h1>

          {/* Your quiz categories */}
          <section className="text-gray-600 body-font">
            <div className="container px-5 mx-auto">
              <div className="flex flex-wrap -m-4">
                {/* Repeatable Quiz Card Component */}
                <QuizCard 
                  name="HOLDEN CAULFIELD" 
                  role="Senior Product Designer" 
                  imgSrc="https://dummyimage.com/302x302" 
                />
                <QuizCard 
                  name="ALPER KAMU" 
                  role="UI Developer" 
                  imgSrc="https://dummyimage.com/300x300" 
                />
                <QuizCard 
                  name="HENRY LETHAM" 
                  role="CTO" 
                  imgSrc="https://dummyimage.com/305x305" 
                />
              </div>
            </div>
          </section>
        </div>

        <RecentActivity />
        
        <Routes>
          <Route path="/quiz" element={<QuizApp />} />
        </Routes>
      </section>
    </Router>
  );
}

// Quiz Card Component for reusability
function QuizCard({ name, role, imgSrc }) {
  return (
    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
      <div className="h-full bg-white rounded-lg shadow-md text-center p-6">
        <img
          alt="testimonial"
          className="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
          src={imgSrc}
        />
        <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{name}</h2>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
}

// Recent Activity Component with Navigation
function RecentActivity() {
  const navigate = useNavigate();

  return (
    <div className="w-[80vw] h-[90vh] border border-blue-300 mx-auto my-0 rounded-xl flex flex-col items-center justify-center">
    <h1 className="text-lg font-semibold text-stone-950 text-center my-4">
      Recent Activity
      <div>
        <span className="inline-block h-1 w-28 rounded bg-indigo-500 mb-4 text-center"></span>
      </div>
    </h1>

    {/* Activity Content */}
    <div className="flex flex-col items-center gap-4">
      <div className="content flex flex-col items-center">
        <i className="fa-brands fa-css3-alt text-3xl mb-2"></i>
        <p className="title text-center">CSS (Cascading Style Sheet)</p>
        <a href="#" onClick={() => navigate('/quiz')} className="button">
          <span>Start Test</span>
        </a>
      </div>

      <div className="content flex flex-col items-center">
        <i className="fa-brands fa-html5 text-3xl mb-2"></i>
        <p className="title text-center">HTML (Hypertext Markup Language)</p>
        <a href="#" className="button">
          <span>Start Test</span>
        </a>
      </div>

      <div className="content flex flex-col items-center">
        <i className="fa-brands fa-node-js text-3xl mb-2"></i>
        <p className="title text-center">JavaScript (Programming Language)</p>
        <a href="#" className="button">
          <span>Start Test</span>
        </a>
      </div>

      <div className="content flex flex-col items-center">
        <i className="fa-brands fa-bootstrap text-3xl mb-2"></i>
        <p className="title text-center">Bootstrap (CSS Framework)</p>
        <a href="#" className="button">
          <span>Start Test</span>
        </a>
      </div>
    </div>
  </div>
  );
}

export default App;
