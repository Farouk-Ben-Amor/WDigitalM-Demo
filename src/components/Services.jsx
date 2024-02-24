import imgone from "../assets/lead.jpg";
import imgtwo from "../assets/decoover.png";
import imgthree from "../assets/cs.jpg";

function Services() {
  return (
    <section>
      <div className='relative items-center w-full px-5 py-28 md:py-48 mx-auto md:px-12 lg:px-24 max-w-7xl'>
        <h1 className='text-4xl mt-8 text-center  font-bold text-yellow-600'>
          World <span className="text-sky-900" >Digital</span> Modernization
        </h1>
        <h1 className='text-2xl text-center my-10  font-bold text-blueGray-600'>
          All what you need to establish digital programs delivery success using
          intelligent solutions based on Agile Way of Working
        </h1>
        <div className='grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3'>
          <div className='p-6 my-12 rounded-lg shadow-xl bg-white transform transition-transform hover:scale-105'>
            <img
              className='object-cover object-center w-full mb-8 lg:h-80 md:h-96 rounded-xl'
              src={imgone}
              alt='blog'
            />
            <h1 className='mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl'>
              LEADERSHIP & MANAGEMENT
            </h1>
            <p className='mx-auto my-6 text-base leading-relaxed text-blueGray-600'>
              We are executive management experts specializing in Banking
              digital business services Cloud, Data and Security services to
              help businesses to establish digital programs delivery success by
              proposing intelligent solutions based on Agile Way of Working.
            </p>
          </div>
          <div className='p-6 my-12 rounded-lg shadow-xl bg-white transform transition-transform hover:scale-105'>
            <img
              className='object-cover object-center w-full mb-8 lg:h-80 md:h-96 rounded-xl'
              src={imgtwo}
              alt='blog'
            />
            <h1 className='mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl'>
              DIGITAL EXPERTISE
            </h1>
            <p className='mx-auto my-6 text-base leading-relaxed text-blueGray-600'>
              Our experience in CIB/Banking and IT departments has enabled us to
              build and lead numerous information programs related to the
              digital transformation of business processes and value
              propositions. It includes successful Agile leadership of Cloud,
              Data, AI, and Security initiatives. Partnerships and effective
              communication play a key role in long-term success.
            </p>
          </div>
          <div className='p-6 my-12 rounded-lg shadow-xl bg-white transform transition-transform hover:scale-105'>
            <img
              className='object-cover object-center w-full mb-8 lg:h-80 md:h-96 rounded-xl'
              src={imgthree}
              alt='blog'
            />
            <h1 className='mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl'>
              CYBERSECURITY EXPERTISE
            </h1>
            <p className='mx-auto my-6 text-base leading-relaxed text-blueGray-600'>
              In a complex and innovative business environment, our added value
              is to bring clarity of direction and objectives by defining and
              articulating a clear vision and strategy; execute the delivery of
              this strategy reliably with a focus on realizing structural and
              solid improvements (governance, operating model, organization, and
              process) and benefits by leading or influencing a diverse team of
              professionals, inspiring trust, cooperation, transparency, and
              taking complete accountability for results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
