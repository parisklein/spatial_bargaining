import React, { Component } from 'react';
import { Bubble } from 'react-chartjs-2';


class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Boston', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets: [
                    {
                        label: 'Stakeholders',
                        data: [{
                            x: 7,
                            y: 5,
                            r:7
                        }, {
                            x: 9,
                            y: 12,
                            r:10
                            }, {
                            x: 11,
                            y: 13,
                            r: 12

                            }

                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]

            }
        }
    }



    render() {

        //const handleGetData = () => {
          //  console.log("hello");


      //  }




        return (
            <div className="chart">
                <Bubble
                    data={this.state.chartData}
                    options={{
                    }}
                />
               // handleGetData()
            </div>



            )
    }
}

//const pushValue = document.getElementById('pushvalue');
//const push = document.getElementById('push');
//push.addEventListener('click', pushValueChart);

//function pushValueChart() {
//    console.log(Chart.chartData.datasets[0].data);
//    Chart.chartdata.datasets[0].push(5);
//    console.log(Chart.chartData.datasets[0].data);




export default Chart;
