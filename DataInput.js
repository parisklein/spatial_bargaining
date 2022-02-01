import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(.1),
    }
}))


function App(props) {
    const classes = useStyles()
    const inputArray = [{ Stakeholder: '', x: '', y: '' }, { Stakeholder: '', x: '', y: '' }]
    const [inputFields, setInputFields] = useState([inputArray
    ]);

    function consoleItem(item, index, arr) {
        console.log('a[' + index + ']=' + item);
    }

    const handleCalculate = (e) => {
        e.preventDefault();


        const calculateAverage = arr => arr.reduce((p, c) => p + c, 0) / arr.length;
        let xValues = inputFields.map(function (obj) { return parseFloat(obj.x) })
        let yValues = inputFields.map(function (obj) { return parseFloat(obj.y) })
        var avg = { x: 0, y: 0 };
        avg.x = parseFloat(calculateAverage(xValues).toFixed(2));
        avg.y = parseFloat(calculateAverage(yValues).toFixed(2));

        console.log("average of x:", avg.x);
        console.log("average of y: ", avg.y);
        //setResult(avg.x);


        const calculateRadiusSizes = function (avg, inputFields) {

            let distances = inputFields.map(function (obj) {
                return parseFloat(Math.sqrt((Math.pow((avg.x - obj.x), 2)) + (Math.pow((avg.y - obj.y), 2))).toFixed(2));
            })

            return distances;
        }


        var radiusSizes = calculateRadiusSizes(avg, inputFields);
        console.log("Radius: ", radiusSizes);


    };


    const handleChangeInput = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);

    }

    const handleAddFields = () => {
        setInputFields([...inputFields, { Stakeholder: '', x: '', y: '' }])
    }

    const handleRemoveFields = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    }
    class App extends React.Component {

        state = {
            value: ''
        }

        getValue = (event) => {
            event.preventDefault();
            console.log('Event: ', event.target.value);
            this.setState({ value: event.target.value });

        }

        handleSubmit = () => {
            const value = this.state.value;
        }
    }




    const dataInput = (props) => {
        return (
            <Container maxwidth="xs" className="input">
                <form onCalculate={handleCalculate}>
                    {inputFields.map((inputField, index) => (
                        <div key={index}>
                            <TextField
                                name="Stakeholder"
                                label="Stakeholder"
                                variant='filled'
                                value={inputField.Stakeholder}
                                onChange={event => handleChangeInput(index, event)}
                            />
                            <TextField
                                name="x"
                                label="x"
                                variant='filled'
                                value={inputField.x}
                                onChange={event => handleChangeInput(index, event) && this.getValue}


                            />
                            <TextField
                                name="y"
                                label="y"
                                variant='filled'
                                value={inputField.y}
                                onChange={event => handleChangeInput(index, event)}
                            />
                            <IconButton
                                onClick={() => handleRemoveFields(index)}
                            >
                                <RemoveIcon />
                            </IconButton>
                            <IconButton
                                onClick={() => handleAddFields()}
                            >
                                <AddIcon />
                            </IconButton>
                        </div>
                    ))}
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="grey"
                        type="submit" onClick={props.handleCalculate}>{props.title}
                        Calculate
                    </Button>

                </form>


            </Container>
        )
    }
}

export default dataInput;
