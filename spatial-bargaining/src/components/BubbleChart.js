import React, { Component } from 'react';
import { Bubble } from 'react-chartjs-2';
//import Chart from 'chart.js/auto';

class Chart extends Component {

    componentDidUpdate() {
        console.log("update chart", this.props.average  )
            }

    render() {
        
        return (
            <div className="chart">
                <Bubble
                    data={{
                        datasets: [{
                            label: 'red',
                            data: [{
                                x: this.props.average,
                                y: 3,
                                r: this.props.average
                            }]
                        }]
                    }}

                />
            </div>
        );
    }
	
}



//    constructor(props) {     
//        super(props);
//        state = {
//            data: {
//                datasets: [{
//                    label: 'Stakeholders',
//                    data: [
//                        x: 3,
//                        y: 5,
//                        r: 10]
//                }]
//            }
//        }

//        console.log("bubble chart", props);

        
//    }



//    render() {

//        return (
//            <div className="chart">
//                <Bubble
//                    data = {                       
//                        datasets: [{
//                            label: 'Stakeholders',
//                                data: [
//                                x: 3,
//                                y: 5,
//                                r: 10 ]
//                         }]
//                    }
//                >
//                <Bubble/>
//            </div>

//        );
        
//    }
//}

//datasets: [{
//    label: 'Stakeholders',
//    data: [{
//        x: this.props.average,
//        y: 5,
//        r: 10
//    }, {
//        x: 0,
//        y: 0,
//        r: 0
//    }, {
//        x: 0,
//        y: 0,
//        r: 0
//    }],
//    backgroundColor: [
//        'rgba(255, 99, 132, 0.6)',
//        'rgba(54, 162, 235, 0.6)',
//        'rgba(255, 206, 86, 0.6)',
//        'rgba(75, 192, 192, 0.6)',
//        'rgba(153, 102, 255, 0.6)',
//        'rgba(255, 159, 64, 0.6)',
//        'rgba(255, 99, 132, 0.6)'
//    ]
//};

    //                    options={{}}
//const pushValue = document.getElementById('pushvalue');
//const push = document.getElementById('push');
//push.addEventListener('click', pushValueChart);

//function pushValueChart() {
//    console.log(Chart.chartData.datasets[0].data);
//    Chart.chartdata.datasets[0].push(5);
//    console.log(Chart.chartData.datasets[0].data);




export default Chart;
