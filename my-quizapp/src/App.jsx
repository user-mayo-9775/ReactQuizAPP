import './App.css';
import quizImage from '../src/img/Kodc.gif';

function App() {
  return (<section className='bg-slate-100'>
<div
  className="w-[60vw] h-[85vh] border border-blue-300  mx-auto my-0"
  style={{
    backgroundImage: `url(${quizImage})`,
    backgroundSize: 'cover',   // Ensures the entire image fits within the div
    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
    backgroundPosition: 'center', // Centers the image
  }}
>
</div>

<div
  className="w-[90vw] border-blue-300 shadow-md border mt-5 mx-auto my-0 rounded-xl">

<h1 className='text-lg font-semibold text-stone-950 text-center my-4'>Quiz Category
  <div><span class="inline-block h-1 w-28 rounded bg-indigo-500  mb-4 text-center"></span></div>
</h1>
<container>
<section class="text-gray-600 body-font">
  <div class="container px-5  mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full bg-white rounded-lg shadow-md text-center p-6">
          <img
            alt="testimonial"
            class="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="https://i.gifer.com/6HY.gif"
          />
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">General Knowledge</h2>
          <p class="text-gray-500">Some general Questions</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full bg-white rounded-lg shadow-md text-center p-6">
          <img
            alt="testimonial"
            class="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="https://i.gifer.com/3SLF.gif"
          />
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Science & Nature</h2>
          <p class="text-gray-500">About the science and the nature</p>
        </div>
      </div>
     
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full bg-white rounded-lg shadow-md text-center p-6">
          <img
            alt="testimonial"
            class="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="https://i.gifer.com/7Cvv.gif"
          />
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Geography</h2>
          <p class="text-gray-500">About the Geographical Knowledge</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="text-gray-600 body-font">
  <div class="container px-5  mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full bg-white rounded-lg shadow-md text-center p-6">
          <img
            alt="testimonial"
            class="w-20 h-20 mb-4 object-cover object-bottom rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="https://i.gifer.com/pXp.gif"
          />
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Sports</h2>
          <p class="text-gray-500"> About the Sports</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full bg-white rounded-lg shadow-md text-center p-6">
          <img
            alt="testimonial"
            class="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="https://i.gifer.com/7zHX.gif"
          />
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Vehicles</h2>
          <p class="text-gray-500">About the Vehicles</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full bg-white rounded-lg shadow-md text-center p-6">
          <img
            alt="testimonial"
            class="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="https://i.gifer.com/9lfC.gif"
          />
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Entertainment</h2>
          <p class="text-gray-500">About the Cartoons</p>
        </div>
      </div>
    </div>
  </div>
</section>
</container>
</div>
<div
  className="w-[80vw] h-[50vh] border border-blue-300 mx-auto my-auto rounded-xl"
>
<h1 className='text-lg font-semibold text-stone-950 text-center my-4'>Recent Activity 
  <div><span class="inline-block h-1 w-28 rounded bg-indigo-500  mb-4 text-center"></span></div>
</h1>
</div>




  </section>
   
  );
}

export default App;
