import SubheaderOne from "../subheader/SubheaderOne";
import { CheckIcon } from '@heroicons/react/20/solid';
import Pricingupper from "./Pricingupper";
import Pricingdown from "./Pricingdown";

const includedFeaturesinWebsite = [
  'Responsive Website',
  'User Friendly Navigation',
  'Customized Web Design',
  'Domain and Hosting',
]

const includedFeaturesERP = [
  'Unlimited Functionalities',
  'Database Connection',
  'Customized Web Design',
  'Domain and Hosting',
]

const includedFeaturesMobile = [
  'Promting through Social Media',
  'Business idaes from Industry Experts',
  'Advertisement',
  'Continuos Monitoring',
]

const includedFeaturesBusiness = [
  'Promting through Social Media',
  'Business idaes from Industry Experts',
  'Advertisement',
  'Continuos Monitoring',
]

export default function Pricing() {
  return (
    <div>
      <div>
        <SubheaderOne />

        <div className="bg-white pb-20 sm:pb-20 pt-6 sm:pt-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            {/* Website */}
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <Pricingupper
                  title="Website for your Business"
                  content="We ensure that every website we create not only reflects your brand identity but also enhances your online visibility and drives meaningful engagement." />
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >
                  {includedFeaturesinWebsite.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-purple-800" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <Pricingdown amount="10,000" btnText="Get your website" />
              </div>
            </div>

            {/* Web Application */}
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <Pricingupper
                  title="ERP System for your business"
                  content="Our custom-built Enterprise Resource Planning (ERP) system will be meticulously designed to streamline and integrate your company's core processes into a unified platform." />
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >
                  {includedFeaturesERP.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-purple-800" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <Pricingdown amount="40,000" btnText="Get your ERP System" />
              </div>
            </div>

            {/* Marketing your brand */}
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <Pricingupper
                  title="Marketing your Brand"
                  content="Through a fusion of creativity, data-driven insights, and market expertise, our campaign aims to position your brand at the forefront of your industry." />
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >
                  {includedFeaturesBusiness.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-purple-800" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <Pricingdown amount="10,000" btnText="Improve your Business" />
              </div>
            </div>

          </div>
        </div>


      </div>
    </div>
  );
}
