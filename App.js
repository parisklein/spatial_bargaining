import React from 'react';
import "./app.css"

import BubbleChart from "./BubbleChart"
//import DataInput2 from "./DataInput2"
import Topbar from "./topbar/Topbar";
import ResultTable from './ResultTable';
import { Sidebar } from "./sidebar/Sidebar"
import { Component } from 'react';


export default class App extends React.Component {
    constructor(props) {

        super(props);
        this.state = { Radius: 0, avg: 0, xVals: 0, yVals: 0 };
    }
    updateAppData(rSize, avg, xVal, yVal) {
        this.setState({ Radius: rSize, average: avg, xVals: xVal, yVals: yVal });

        console.log("rSize: ", rSize);
        console.log("avg: ", avg);
        console.log("xVal: ", xVal);
        console.log("yVal: ", yVal);


    }

    render() {
        return (
            <div>
                <Topbar />
                <div className="container">
                    <Sidebar
                        updateAppData={this.updateAppData.bind(this)}
                    />
                    <div className="others">
                        <BubbleChart {...this.props} />
                        <ResultTable />
                    </div>
                </div>

            </div>
        );
    }
}
