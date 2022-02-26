import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

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


  

    inputArray = { Stakeholder: '', x: '', y: '' , idx: ''}

    //inputArray = [{ Stakeholder: '', x: '', y: '' }, { Stakeholder: '', x: '', y: '' }]
    //[inputFields, setInputFields] = useState([inputArray])
        //handleSubmit = () => {
        //    const value = this.state.value;
        //}

    handleClick() {
     //   event.preventDefault();
            console.log("HEY THERE");
            //console.log(this.state.inputFields[1].x)
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


    handleChangeInput(event,index) {
        //event.preventDefault()
        const update_vals = [...this.state.inputFields];
        console.log(update_vals);
        console.log(index);
        //let val = update_vals[index];
        //val.x = event.target.value;
        //update_vals[index] = val;
        //this.setState({inputFields: update_vals})
        //setInputFields(values);
        //this.setState({ value: event.target.value });
       // this.setState({ inputFields.x: event.target.value });   
        //this.handleChangeInput = this.handleChangeInput`.bind(this)
    }


    render() {
        return (
            <Container>
                {this.state.inputFields.map((inputFields, index) => (
                    <div key={index}>
                        <TextField
                            name="Stakeholder"
                            label="Stakeholder"
                            variant='filled'
                            value=''
                           // onChange=vent => handleChangeInput(index, event)}
                        />
                        <TextField
                            name="x"
                            label="x"
                            variant='filled'
                            value={inputFields.x}
                            onChange={this.handleChangeInput.bind(this)}
                        />
                        <TextField
                            name="y"
                            label="y"
                            variant='filled'
                            value={inputFields.y}
                            //onChange={event => handleChangeInput(index, event)}
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
}
