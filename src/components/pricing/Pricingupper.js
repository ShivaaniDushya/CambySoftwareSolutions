export default function Pricingupper(props) {
    return (
        <div>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">{props.title}</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
                {props.content}
            </p>
            <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-purple-800">What’s included</h4>
                <div className="h-px flex-auto bg-gray-100" />
            </div>
        </div>
    );
}