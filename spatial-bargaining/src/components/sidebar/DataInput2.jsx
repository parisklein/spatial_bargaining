import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import { makeStyles } from '@material-ui/core/styles';




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
        //console.log(prevState)
        //console.log(this.state)

    }


    handleClick(event) {
        //event.preventDefault();

        this.props.updateSidebarData(this.state.inputFields);
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



    // Handle when a sidebar form has a text input
    handleChangeInput(event, index, axis) {
        event.preventDefault()
        const updatedValue = event.target.value;
        let inputFields = this.state.inputFields;
        let inputFieldToUpdate = inputFields[index];
        inputFieldToUpdate[axis] = updatedValue;
        const updatedInputFields = inputFields.map((inputField, i) => {
            if (i == index) {
                return inputFieldToUpdate;
            }
            else {
                return inputFields[i];
            }
        });
        this.setState({ inputFields: updatedInputFields });

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
                            value={inputFields.Stakeholder}
                            onChange={event => this.handleChangeInput(event, index, 'Stakeholder')}
                        />
                        <TextField
                            name="x"
                            label="x"
                            variant='filled'
                            value={inputFields.x}
                            onChange={event => this.handleChangeInput(event, index, 'x')}
                        />
                        <TextField
                            name="y"
                            label="y"
                            variant='filled'
                            value={inputFields.y}
                            onChange={event => this.handleChangeInput(event, index, 'y')}
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
