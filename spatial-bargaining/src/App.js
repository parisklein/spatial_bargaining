import React from 'react';
import "./app.css"

import BubbleChart from "./components/BubbleChart"
//import DataInput2 from "./components/DataInput2"
import Topbar from "./components/topbar/Topbar";
import ResultTable from './components/ResultTable';
import { Sidebar } from "./components/sidebar/Sidebar"
import { Component } from 'react';
import Chart from 'chart.js/auto';


export default class App extends React.Component {
    constructor(props) {

        super(props);
        this.state = { inputFields_top: "" };
    }


    updateAppData(inputFields) {
        this.setState({ inputFields_top: inputFields });

        console.log("inputFields", inputFields);
        this.handleCalculate(inputFields)

    }


    handleCalculate(inputFields) {

        let xValues = inputFields.map(function (obj) { return parseFloat(obj.x) })
        let yValues = inputFields.map(function (obj) { return parseFloat(obj.y) })
        var avg = { x: 0, y: 0 };
        avg.x = parseFloat(this.calculateAverage(xValues).toFixed(2));
        avg.y = parseFloat(this.calculateAverage(yValues).toFixed(2));

        console.log("average of x:", avg.x);
        console.log("average of y: ", avg.y);

        // radisSizes is an array
        var radiusSizes = this.calculateRadiusSizes(avg, inputFields);
        console.log("Radius: ", radiusSizes);

        this.setState({
            radii: radiusSizes,
            average: avg,
            xVals: xValues,
            yVals: yValues
        })

        return [radiusSizes, avg, xValues, yValues];
    };

    calculateRadiusSizes(avg, inputFields) {
        let distances = inputFields.map(function (obj) {
            return parseFloat(Math.sqrt((Math.pow((avg.x - obj.x), 2)) + (Math.pow((avg.y - obj.y), 2))).toFixed(2));
        })
        return distances;

            }
            

    calculateAverage(array) {
        const arr= array
        let arrayOutput = arr.reduce((p, c) => p + c, 0) / arr.length;
        return arrayOutput;
    };

     //const avg = this.props.avg
     //const test ="Yo Yo wassup?"

    render() {
        //dataPassDown = { radiusSizes, avg, xValues, yValues }
   
        return (
            <div>
                <Topbar />
                <div className="container">
                    <Sidebar
                        updateAppData={this.updateAppData.bind(this)}
                    />
                    <div className="others">
                        <BubbleChart
                            average={this.state.xVals}
                            //test={test}
                            radius={50}
                        />
                        <ResultTable />
                    </div>
                </div>

            </div>
        );
    }
}