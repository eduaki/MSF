import Chart, { CategoryScale } from "chart.js/auto"
import { Doughnut, Pie } from "react-chartjs-2";

Chart.register(CategoryScale)

export default function DougnhnutChart(){

    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

    var chart = new Chart({
        type: "doughnut",
        data: data,

    })

    console.log(chart)

    return (
        <>
            <div>
            <Pie
        data={chart}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            }
          }
        }}
      />
            </div>
        </>
    )
}