import React from 'react';
import "./app.css"

import BubbleChart from "./components/BubbleChart"
//import DataInput2 from "./components/DataInput2"
import Topbar from "./components/topbar/Topbar";
import ResultTable from './components/ResultTable';
import { Sidebar } from "./components/sidebar/Sidebar"
import D3BubbleChart from "./components/D3BubbleChart"
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
        let Stakeholders = inputFields.map(function (obj) { return (obj.Stakeholder) })
        var avg = { x: 0, y: 0 };
        avg.x = parseFloat(this.calculateAverage(xValues));
        avg.y = parseFloat(this.calculateAverage(yValues));

        //console.log("average of x:", avg.x);
        //console.log("average of y: ", avg.y);

        // radisSizes is an array
        var radiusSizes = this.calculateRadiusSizes(avg, inputFields);
        //console.log("Radius: ", radiusSizes);
        let buffer = 1.0; // percent buffer
        let Xf = buffer*(Math.max(...xValues) + Math.max(...radiusSizes));
        let Xi = buffer*(Math.min(...xValues) - Math.max(...radiusSizes));
        let Yf = buffer*(Math.max(...yValues) + Math.max(...radiusSizes));
        let Yi = buffer*(Math.min(...yValues) - Math.max(...radiusSizes));
        let xspan = Xf - Xi;
        let yspan = Yf - Yi;
        let span = 0;

        if (xspan >= 2 * yspan) {
            span = xspan; // X is the driving axis
            //Xf = avg.x + yspan * 4;
            //Xi = avg.x - yspan * 4;
            Yf = avg.y + xspan;
            Yi = avg.y - xspan;
            Xf = avg.x + 2 * xspan;
            Xi = avg.x - 2 * xspan;
            xspan = Xf - Xi;
            
        }
        else {

            Yf = avg.y + yspan*2;
            Yi = avg.y - yspan*2;

            Xf = avg.x + yspan * 4;
            Xi = avg.x - yspan * 4;
            
            
            xspan = Xf - Xi;
            span = xspan;
        }

        console.log("hello there", Math.max(...xValues))
        console.log("hello there", Math.max(...radiusSizes))
        console.log(xValues)

        this.setState({
            Stakeholder:Stakeholders, 
            radii: radiusSizes,
            average: avg,
            xVals: xValues,
            yVals: yValues,
            inpField: inputFields,
            xf: Xf,
            xi: Xi,
            yf: Yf,
            yi: Yi,
            Xspan: xspan,
            Yspan: yspan,
            Span: span
        })

        //return [radiusSizes, avg, xValues, yValues];
    };

    calculateRadiusSizes(avg, inputFields) {
        let distances = inputFields.map(function (obj) {
            return parseFloat(Math.sqrt((Math.pow((avg.x - obj.x), 2)) + (Math.pow((avg.y - obj.y), 2))));
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
                        <div>
                            <BubbleChart
                                Staks={this.state.Stakeholder}
                                Xnumbers={this.state.xVals}
                                Ynumbers={this.state.yVals}
                                aver={this.state.average}
                                rad={this.state.radii}
                                inp={this.state.inpField}
                                xi={this.state.xi}
                                xf={this.state.xf}
                                yi={this.state.yi}
                                yf={this.state.yf}
                                xs={this.state.Xspan}
                                ys={this.state.Yspan}
                                s={this.state.Span}
                        />

                        </div>
                      
                    
                    
                        <ResultTable
                            Staks={this.state.Stakeholder}
                            Xnumbers={this.state.xVals}
                            Ynumbers={this.state.yVals}
                            aver={this.state.average}
                            rad={this.state.radii}
                            inp={this.state.inpField}
                        />
                    </div>
                </div>

            </div>
        );
    }
}