import React, { useState } from 'react';
import "./app.css"

import BubbleChart from "./components/BubbleChart"
import DataInput from "./components/DataInput"
import Topbar from "./components/topbar/Topbar";
import ResultTable from './components/ResultTable';
import Sidebar from "./components/sidebar/Sidebar"



function App() {

    state = {
        title:'placeholder title'
    }

    const handleCalculate = (e) => {
        this.setState({
            e.preventDefault();


            const calculateAverage = arr => arr.reduce((p, c) => p + c, 0) / arr.length;
            let xValues = inputFields.map(function (obj) { return parseFloat(obj.x) })
        let yValues = inputFields.map(function (obj) { return parseFloat(obj.y) })
        var avg = { x: 0, y: 0 };
            avg.x = parseFloat(calculateAverage(xValues).toFixed(2));
            avg.y = parseFloat(calculateAverage(yValues).toFixed(2));

            console.log("average of x:", avg.x);
            console.log("average of y: ", avg.y);
        });
        //setResult(avg.x);
    }


    return(
        <div>
            <Topbar />
            <div className="container">
                <Sidebar handleCalculate={this.handleCalculate }title={this.state.title}/>
                <div className="others">
                    <BubbleChart />
                    <ResultTable />
                </div>
            </div>

        </div>



)
}

export default App;
