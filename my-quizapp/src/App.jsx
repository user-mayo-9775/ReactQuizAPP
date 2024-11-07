import './App.css';
import quizImage from '../src/img/Quiz3.jpeg';
function App() {
  return (<section className='bg-slate-100 mb-4'> 
    <div
      className="w-[80vw] h-[60vh]  mx-auto my-0"
      style={{
        backgroundImage: `url(${quizImage})`,
        backgroundSize: 'contain',   // Ensures the entire image fits within the div
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        backgroundPosition: 'center', // Centers the image
      }}
    >
    </div>

    <div
      className="w-[80vw] h-[60vh] border-blue-300 shadow-md border mt-5 mx-auto my-0 rounded-xl">
    
    <h1 className='text-lg font-semibold text-stone-950 text-center my-4'>Quiz Category
      <div><span class="inline-block h-1 w-28 rounded bg-indigo-500  mb-4 text-center"></span></div>
    </h1>
    
    <section class="text-gray-600 body-font">
      <div class="container px-5  mx-auto">
        <div class="flex flex-wrap -m-4">

          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full bg-white rounded-lg shadow-md text-center p-6">
              <img
                alt="testimonial"
                class="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://dummyimage.com/302x302"
              />

              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
              <p class="text-gray-500">Senior Product Designer</p>
            </div>
          </div>

          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full bg-white rounded-lg shadow-md text-center p-6">
              <img
                alt="testimonial"
                class="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://dummyimage.com/300x300"
              />

              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
              <p class="text-gray-500">UI Developer</p>
            </div>
          </div>

          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full bg-white rounded-lg shadow-md text-center p-6">
              <img
                alt="testimonial"
                class="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://dummyimage.com/305x305"
              />

              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
              <p class="text-gray-500">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    <div
      className="w-[80vw] h-[90vh] border border-blue-300 mx-auto my-0 rounded-xl"
    >
    <h1 className='text-lg font-semibold text-stone-950 text-center my-4'>Recent Activity 
      <div><span class="inline-block h-1 w-28 rounded bg-indigo-500  mb-4 text-center"></span>
            <div class="content">
                <i class="fa-brands fa-css3-alt"></i>
                <p class="title">CSS (Cascading Style Sheet)</p>
                <a href="#" class="button"><span>Start Test</span></a>
            </div>

            <div class="content">
                <i class="fa-brands fa-html5"></i>
                <p class="title">HTML (Hypertext Markup Language)</p>
                <a href="#" class="button"><span>Start Test</span></a>
            </div>
    
            <div class="content">
                <i class="fa-brands fa-node-js"></i>
                <p class="title">JavaScript (Programming Language)</p>
                <a href="#" class="button"><span>Start Test</span></a>
            </div>
    
            <div class="content">
                <i class="fa-brands fa-bootstrap"></i>
                <p class="title">Bootstrap (CSS Framework)</p>
                <a href="#" class="button"><span>Start Test</span></a>
            </div>
      </div>
    </h1>
    </div>
      </section>
      );
    }

    export default App;
