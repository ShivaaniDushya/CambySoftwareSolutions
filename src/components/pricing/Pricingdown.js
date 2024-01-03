export default function Pricingdown(props) {
    return (
        <div>
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">Starting Form</p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">{props.amount}</span>
                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">LKR</span>
                    </p>
                    <a
                        href="/contactUs"
                        className="mt-10 block w-full rounded-md bg-purple-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        {props.btnText}
                    </a>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                        Invoices and receipts available
                    </p>
                </div>
            </div>
        </div>
    );
}