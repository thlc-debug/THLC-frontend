import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import { FaArrowRightLong } from "react-icons/fa6";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const Overview = () => {
    const data = {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [1500, 1200, 700, 1000, 500, 300, 900, 1100, 800],
                backgroundColor: 'rgba(71,71,71,0.7)',
            },
            {
                label: 'Dataset 2',
                data: [1200, 1500, 600, 800, 300, 200, 700, 900, 700],
                backgroundColor: 'rgba(197,197,197, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: true,
                }
            },
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: true,
                }
            },
        },
    };

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <div className="text-lg font-medium text-gray-900 flex gap-2">
                <h1> Overview </h1>
                <span className="mt-1.5"><FaArrowRightLong/></span>
            </div>
            <div className="mt-4">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Overview;
