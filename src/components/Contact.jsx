import logo from "../assets/Logo.png";

function Contact() {
  return (
    <div>
      <div className='pt-24'>
        <section className='text-gray-700 body-font relative'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='flex flex-col text-center w-full mb-12'>
              <h1 className='text-4xl md:text-2xl text-center mb-8 font-bold text-yellow-600'>
                Connect with us
              </h1>
              <h3 className='lg:w-2/3 mx-auto leading-relaxed text-xl font-bold '>
                How can we help ?
              </h3>
            </div>
            <div className='lg:w-1/2 md:w-2/3 mx-auto'>
              <div className='flex flex-wrap -m-2'>
                <div className='p-2 w-1/2'>
                  <div className='relative'>
                    <label
                      htmlFor='name'
                      className='leading-7 text-sm font-semibold text-blueGray-600'>
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      className='w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                </div>
                <div className='p-2 w-1/2'>
                  <div className='relative'>
                    <label
                      htmlFor='email'
                      className='leading-7 text-sm font-semibold text-blueGray-600'>
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className='w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                </div>
                <div className='p-2 w-full'>
                  <div className='relative'>
                    <label
                      htmlFor='message'
                      className='leading-7 text-sm font-semibold text-blueGray-600'>
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      className='w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'></textarea>
                  </div>
                </div>
                <div className='p-2 w-full'>
                  <button className='flex mx-auto text-white bg-sky-950 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg'>
                    Send
                  </button>
                </div>
                <div className='p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center'>
                  <p className='font-bold pb-2 '>Or , Email Us :</p>
                  <a
                    className='text-indigo-500'
                    href='mailto:contact@wdigitalm.com'>
                    contact@wdigitalm.com
                  </a>
                  <p className='pt-2 font-medium'>Paris - Berlin - Miami</p>
      <div className="flex justify-center items-center pb-8">
        <img className="w-30 h-30  md:w-40 md:h-40 mt-12" src={logo} alt="Company Logo" />
      </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
