import styles from './LineChart.module.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, ChartData, Point, ChartOptions,
} from 'chart.js'
import dayjs from 'dayjs'
import { ChartProps, Line } from 'react-chartjs-2'
import { Statistic } from 'src/store/slices/userSlice/userSlice.types'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


// @ts-ignore
const formatXAxisLabel = (value, index, values) => {
  const date = dayjs(value);
  const weekday = date.format("ddd");
  const dayOfMonth = date.format("D");
  return `$`
};

const LineChart = ({ statistic }: { statistic: Statistic[] }) => {
  // Функция, которая возвращает массив дней текущего месяца в формате "YYYY-MM-DD"
  const getDaysOfMonth = (): string[] => {
    const daysInMonth = dayjs().daysInMonth();
    const daysArray: string[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const day = dayjs().date(i).format('DD');
      daysArray.push(day)
    }
    return daysArray;
  };

  const getDaysArray = () => {
    const daysInMonth = dayjs().daysInMonth();
    const daysArray: number[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i)
    }
    return daysArray;
  }

  const data: ChartData<"line", (number | Point | null)[], unknown> = {
    labels: getDaysOfMonth(),
    datasets: [
      {
        label: 'Затраты токенов в сутки',
        data: getDaysArray().map(day => Number(statistic.find(s => dayjs(s.day).date() === day)?.totalTokens ?? 0) ?? 0),
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgb(75, 192, 192)',
        tension: 0.5,
        pointRadius: 3,

      }
    ]
  };

  return (
    <Line data={data} width='600px' />
  );
}

export default LineChart