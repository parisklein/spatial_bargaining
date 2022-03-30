import React, { Component } from 'react';
import { Bubble } from 'react-chartjs-2';
//import Chart from 'chart.js/auto';

class Chart extends Component {
    //zero = this.scale.getPixelForValue(0);


    componentDidUpdate() {
        
        console.log("update chart", this.props.aver)
        console.log("Stakeholders", this.props.Staks)
        console.log("arraylength", this.props)
        

    }
    colors = ['rgb(255, 127, 0.6)',
        'rgb(169, 169, 169)',
        'rgb(0, 0, 255)',
        'rgb(255, 204, 0)',
        'rgba(75, 192, 192, 0.6)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)']

    
     //this.managers.forEach(manager => {
     //    const newDataPoint = {
     //        label: [manager.SecurityName],
     //        backgroundColor: this.getRandomRGB(),
     //        borderColor: this.getRandomRGB(),
     //        data: [{
     //            x: +manager[this.selectedX],
     //            y: +manager[this.selectedY],
     //            r: +manager[this.selectedR]
     //        }],
     //        radius: (+manager[this.selectedR] * 10)
     //    };
     //    this.chartDataSet.push(newDataPoint);
     //});




    render() {
        let completeData = (this.props.Staks !== undefined) ?
            this.props.Staks.map((obj, index) => {
                return {
                    label: obj,
                    data: [{
                        x: this.props.Xnumbers[index],
                        y: this.props.Ynumbers[index],
                        //r: 100
                        r: (1350 * (this.props.rad[index]) / this.props.xs)
                        //r: (1493 * (this.props.rad[index]) / this.props.xs)
                    }],
                    options: {
                        responsive: true,
                        aspectRatio: 2
                        
                    },
                    clip: { left: -5, top: -5, right: -5, bottom: -5 },
                    //radius(context) {
                    //    var scale = this.context.chart.scales.props.Xnumbers[index];
                    //    var zero = scale.getPixelForValue(0);
                    //    var value = scale.getPixelForValue(context.dataset.data[context.dataIndex].size);
                    //    return Math.abs(value-zero)
                    /*},*/
                    backgroundColor: [
                        this.colors[index]
                    ]

                }
            }) : []
        if (this.props.aver !== undefined) {
            completeData.push(
                {
                    label: "Average",
                    data: [{
                        x: parseInt(this.props.aver.x),
                        y: parseInt(this.props.aver.y),
                        r: 10
                    }], backgroundColor: "black"
                }
            )
        }
        
        return (

            <div className="chart">
                <Bubble
                    data={{

                        datasets: completeData

                    }}
                    options={{
                        //type: 'scale',
                        scales: {
                            x: {
                                //suggestedMin: 0,
                                //suggestedMax:10  
                                min: this.props.xi,
                                max: this.props.xf

                            },
                            y: {
                                //suggestedMin: 0,
                                //suggestedMax: 5
                                min: this.props.yi,
                                max: this.props.yf
                                    
                            }

                        }

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



export default Chart;
