import Header from "../header/Header";

export default function Home() {

  return (
    <div className="bg-white">
      <Header/>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-4 sm:py-4 lg:py-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Software Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Empower your business with our cutting-edge software solutions tailored to amplify your productivity and efficiency. Our intuitive and scalable software is crafted to streamline operations, enhance collaboration, and drive innovation. Seamlessly adaptable to your unique needs, our technology promises to revolutionize the way you work, ensuring a competitive edge in today's dynamic market landscape.
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-14">
              Business Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Unlock the full potential of your enterprise with our comprehensive suite of business solutions designed to propel growth and maximize success. From strategic consulting to implementation, our expert team customizes robust solutions that optimize processes, mitigate risks, and capitalize on opportunities. Elevate your business performance, foster agility, and achieve sustainable outcomes in an ever-evolving business landscape with our tailored, results-driven approach.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6 mb-4">
              <a
                href="/services"
                className="rounded-md bg-purple-800 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-800"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}