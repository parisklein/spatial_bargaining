import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';


// I first tried to change each x, y, value into their  own states. Once I did that the problem was that all x and y input fields would print the same thing as if they were connected to one single array. 

// Since I did not have luck with that, I decided to go back to using the array method with the map function. This leads me to the current issue. 

// The problem: Using an array with the map function, I am not sure how to access the data that is inside of each x, y input field. For example, how do I access the x value from the second array? 

// Aside from this problem, I am having an error pop up when I include the button key which we added last time we met. For now I have commented that out.

// I look forward to discussing this further with you during our upcoming meeting.

import { makeStyles } from '@material-ui/core/styles';



    const boxStyle = {
        border: '1px solid red',
        padding: '5px'
};


    const handleCalculate = (inputFields) => {

        let xValues = inputFields.map(function (obj) { return parseFloat(obj.x) })
        let yValues = inputFields.map(function (obj) { return parseFloat(obj.y) })
        var avg = { x: 0, y: 0 };
        avg.x = parseFloat(calculateAverage(xValues).toFixed(2));
        avg.y = parseFloat(calculateAverage(yValues).toFixed(2));

        //console.log("average of x:", avg.x);
        //console.log("average of y: ", avg.y);

        // radisSizes is an array
        var radiusSizes = calculateRadiusSizes(avg, inputFields);
        //console.log("Radius: ", radiusSizes);

        return [radiusSizes, avg, xValues, yValues];
    };

    const calculateRadiusSizes = function (avg, inputFields) {

        let distances = inputFields.map(function (obj) {
            return parseFloat(Math.sqrt((Math.pow((avg.x - obj.x), 2)) + (Math.pow((avg.y - obj.y), 2))).toFixed(2));

        })
        //console.log(distances);
        return distances; // returns distances in an array

    }

    const calculateAverage = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

//const handleAddFields = () => {
//    setInputFields([...DataInput2.inputFields, { Stakeholder: '', x: '', y: '' }])
//}


export class DataInput2 extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            inputFields: [{ Stakeholder: '', x: '', y: '' }],
            calculatedData: 0,
        };
        this.handleChangeInput = this.handleChangeInput.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState)
        console.log(this.state)

    }


  


    handleClick() {
       event.preventDefault();
        const inputArray = { Stakeholder: '', x: '', y: '' , idx: ''}
        //create variables to represent totals for x,y, etc
        //Get state value for all inputs
        //loop and visit each index
        //do some math add values at index to total
        // this.setState([...this.state.inputArray, inputArray])
        // inputArray = [{ Stakeholder: '', x: '', y: '' }, { Stakeholder: '', x: '', y: '' }]
    }
    handleSubmit = () => {
        const value = this.state.value;
     }
    handleAdd() {
        this.state.inputFields.push({ Stakeholder: '', x: '', y: '' })
        this.setState({ inputFields: this.state.inputFields })
    }


    handleRemove(index) {
        
        this.state.inputFields.splice(0, 1);
        this.setState({ inputFields: this.state.inputFields });
        //const values = this.setState({ inputFields: [this.state.inputFields] });
    }
        //handleClick(event) {
        //    event.preventDefault();
        //    var vars = handleCalculate();
        //    this.props.updateSidebarData(vars[0], vars[1], vars[2], vars[3]);
        //}

    //inputFields = [{ Stakeholder: '', x: '', y: '' }]


    handleChangeInput(event, index, axis) {
        event.preventDefault();
        const updatedValue = event.target.value;
        let inputFields = this.state.inputFields;
        let inputFieldToUpdate = inputFields[index];
        // inputFieldToUpdate = Object.assign({}, inputFieldToUpdate, { [axis]: updatedValue })
        inputFieldToUpdate[axis] = updatedValue;
        const updatedInputFields = inputFields.map((inputFiled, i) => {
            if (i === index) {
                return inputFieldToUpdate;
            } else {
                return inputFields[i];
            }
        });
        this.setState({ inputFields: updatedInputFields });
    }
        //let val = update_vals[index];
        //update_vals[index] = val;
        //this.setState({inputFields: update_vals})
        //setInputFields(values);
        //this.setState({ value: event.target.value });
       // this.setState({ inputFields.x: event.target.value });   
        //this.handleChangeInput = this.handleChangeInput`.bind(this)


    render() {
        return (
            <Container>
                {this.state.inputFields.map((inputField, index) => (
                    <div key={index}>
                        <TextField
                            name="Stakeholder"
                            label="Stakeholder"
                            variant='filled'
                            value=''
                           onChange={event => handleChangeInput(event, index, 'Stakeholder')}
                        />
                        <TextField
                            name="x"
                            label="x"
                            variant='filled'
                            value={inputField.x}
                            onChange={event => handleChangeInput(event, index, 'x')}
                        />
                        <TextField
                            name="y"
                            label="y"
                            variant='filled'
                            value={inputField.y}
                            onChange={event => handleChangeInput(event, index, 'y')}
                         />
                        <IconButton
                            onClick={this.handleRemove.bind(this)}
                        >
                                <RemoveIcon />
                        </IconButton>
                        <IconButton
                            onClick={this.handleAdd.bind(this)}
                        >
                            <AddIcon />
                        </IconButton>
                    </div>
                ))}
                <Button //key={index}
                variant="contained"
                color="grey"
                type="submit"
                onClick={this.handleClick.bind(this)}>
                Calculate
                </ Button>
        </Container>
    )
    }
