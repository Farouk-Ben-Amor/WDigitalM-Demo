
import imgp from '../assets/imgp.jpg'; 

function Purpose() {
  return (
    <section className="dark:bg-gray-800 my-24   dark:text-gray-100 rounded-md shadow-xl bg-white transform transition-transform ">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-4xl text-yellow-600 font-bold leadi sm:text-6xl">Our Purpose</h1>
			<p className="mt-6 mb-8 text-lg text-blueGray-600 font-semibold sm:mb-12">We are executive management experts specializing in Banking digital business services Cloud, Data and Security services to help businesses to establish digital programs delivery success by proposing intelligent solutions based on Agile Way of Working. We are passionate about what we do, and our vision is to make a better world with sustainable, innovative services and expertise by setting high standards.
			</p>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={imgp} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 md:rounded-lg sm:rounded-lg" />
		</div>
	</div>
</section>
  );
}

export default Purpose;
