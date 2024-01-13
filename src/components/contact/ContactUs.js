import "./contact.css";
import SubheaderTwo from "../subheader/SubheaderTwo";

export default function ContactUs() {

  function handleClickFacebook() {
    window.open("https://www.facebook.com/CambySoftwareSolutions?mibextid=LQQJ4d");
  };

  function handleClickInstagram() {
    window.open("https://www.instagram.com/CambySoftwareSolutions/?fbclid=IwAR1JXaqP_1cSzfW2suPjXZtT-E_eswPWHI9YMW4pT4ABqSrM3U6Xcq0l5b4");
  };

  function handleClickLinkedin() {
    window.open("https://www.linkedin.com/company/camby-software-solutions/about/?viewAsMember=true");
  };

  function handleClickX() {
    window.open("https://twitter.com/cambysoftware");
  };

  function handleClickEmail() {
    window.open('mailto:info@cambysoftware.com')
  };

  return (
    <div>
      <div>
        <SubheaderTwo />
        <div className="bg-white pb-20 sm:pb-20 pt-0 sm:pt-0">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-8 max-w-2xl rounded-3xl ring-gray-200 sm:mt-8 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Connect With Us</h3>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  Reach out to us through various channels, and our responsive team will be delighted to assist you.
                </p>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >

                  <li className="flex gap-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                    </svg>
                    (+94) 0777 62 54 63
                  </li>

                  <li className="flex gap-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                    <a onClick={handleClickEmail} style={{cursor: "pointer"}}>info@cambysoftware.com</a>
                  </li>

                </ul>
              </div>

              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">Social Media Accounts</p>
                    <a
                      onClick={handleClickFacebook} style={{ cursor: "pointer" }}
                      className="mt-5 block w-full rounded-md bg-purple-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      FaceBook
                    </a>
                    <a
                      onClick={handleClickInstagram} style={{ cursor: "pointer" }}
                      className="mt-5 block w-full rounded-md bg-purple-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Instagram
                    </a>
                    <a
                      onClick={handleClickLinkedin} style={{ cursor: "pointer" }}
                      className="mt-5 block w-full rounded-md bg-purple-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      LinkedIn
                    </a>
                    <a
                      onClick={handleClickX} style={{ cursor: "pointer" }}
                      className="mt-5 block w-full rounded-md bg-purple-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      X (Formerly Twitter)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
