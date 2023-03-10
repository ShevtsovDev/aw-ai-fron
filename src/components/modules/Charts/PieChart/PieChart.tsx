import styles from './LineChart.module.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, ChartData, Point, ChartOptions, ArcElement,
} from 'chart.js'
import dayjs from 'dayjs'
import { ChartProps, Line, Pie } from 'react-chartjs-2'
import { Statistic } from 'src/store/slices/userSlice/userSlice.types'
import { StatisticType } from 'src/store/slices/adminSlise/adminSlise.types'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);


// @ts-ignore
const formatXAxisLabel = (value, index, values) => {
  const date = dayjs(value);
  const weekday = date.format("ddd");
  const dayOfMonth = date.format("D");
  return `$`
};

const options: ChartOptions = {
  plugins: {
    legend: {
      position: 'right',
      display: true,
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => {
          const dataset = tooltipItem.dataset
          const total = dataset.data.reduce((acc: any, cur: any) => acc + cur, 0) as number
          const current = tooltipItem.raw as number
          const percentage = parseFloat((current/total*100).toFixed(1));
          return `${percentage} %  ${current} Переходов;`
        },
        title: tooltipItem =>
          `${tooltipItem[0]?.label}`
      }
    },
  },

}

const PieChart = ({ statistic }: { statistic: (StatisticType & ({title: string | undefined}))[] }) => {
  // Функция, которая возвращает массив дней текущего месяца в формате "YYYY-MM-DD"
  const data: ChartData<any> = {
    labels: statistic.map(s => s.title),
    datasets: [
      {
        label: '# of Votes',
        data: statistic.map(s => s.count),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };



  return <Pie style={{maxHeight: '300px'}} data={data} options={options} />;
}

export default PieChart