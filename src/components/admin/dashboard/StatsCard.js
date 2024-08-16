import { FaArrowUp } from 'react-icons/fa';


const StatsCard = ({ title, count, change }) => (
    <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
        <div>
            <h3 className="text-sm font-medium text-gray-700">{title}</h3>
            <p className="text-2xl font-semibold text-gray-900">{count}</p>
        </div>
        <div className="flex items-center text-green-500 mt-2">
            {/* <span className="ml-1 text-sm">{change}+</span> */}
            {/* <FaArrowUp className="h-4 w-4" /> */}
        </div>
    </div>
);

export default StatsCard;
