
import { DataGrid } from '@mui/x-data-grid';
import React, { Component } from 'react';


class Table extends Component {
    componentDidUpdate() {
        //console.log("update chart", this.props.aver)
        //console.log("Stakeholders", this.props.Staks)
        //console.log("Array", this.props.inp.index)
        console.log(this.props)
    }

    render() {

        return (
            <div className="table" style={{ display: 'flex', height: '100%' }}>
                <DataGrid
                    columns={[
                        { field: 'Stakeholder', width: 190 },
                        { field: 'IssueA', width: 190 },
                        { field: 'IssueB', width: 190 },
                        { field: 'ParetoOptimal', width: 190 },
                    ]}
                    rows={
                        (this.props.Staks !== undefined) ?
                            this.props.Staks.map((obj, index) => {
                                return {
                                    id: index,
                                    Stakeholder: obj,
                                    IssueA: this.props.Xnumbers[index],
                                    IssueB: this.props.Ynumbers[index],
                                    ParetoOptimal: this.props.Ynumbers[index],

                                    //id: index,
                                    //Stakeholder: obj,
                                    //IssueA: this.props.Xnumbers[index+1],
                                    //IssueB: this.props.Ynumbers[index+1],
                                    //ParetoOptimal: this.props.Ynumbers[index+1]
                                }
                            }) : {
                                id: 1,
                                Stakeholder: this.props.Staks,
                                IssueA: this.props.Xnumbers,
                                IssueB: this.props.Ynumbers,
                                ParetoOptimal: this.props.Ynumbers
                            }
                    }
                />
               
            </div>
        );
    }
}

export default Table;


//render() {

//    return (

//        <Container>
//            {this.props.inp.map((inp, index) => (
//                <div key={index}>
//        <div className="table" style={{ display: 'flex', height: '100%' }}>
//            <DataGrid
//                columns={[
//                    { field: 'Stakeholder', width: 190 },
//                    { field: 'IssueA', width: 190 },
//                    { field: 'IssueB', width: 190 },
//                    { field: 'ParetoOptimal', width: 190 },
//                ]}
//                rows={[
//                    {
//                        id: 1,
//                        Stakeholder: this.props.imp.x,
//                        IssueA: this.props.Xnumbers,
//                        IssueB: this.props.Ynumbers,
//                        ParetoOptimal: this.props.Ynumbers
//                    },
//                ]}
//            />

//                    </div>
//                </div>
//        </Container>
//    );
//}
//}















//const columns = [
//    { field: 'id', headerName: 'ID', width: 70 },
//    { field: 'stakeholder', headerName: 'Stakeholder', width: 130 },
//    { field: 'lastName', headerName: 'Last name', width: 130 },
//    {
//        field: 'age',
//        headerName: 'Age',
//        type: 'number',
//        width: 90,
//    },
//    {
//        field: 'fullName',
//        headerName: 'Full name',
//        description: 'This column has a value getter and is not sortable.',
//        sortable: false,
//        width: 160,
//        valueGetter: (params) =>
//            `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
//            }`,
//    },
//];

//const rows = [
//    { id: 1, stakeholder: 'hello', lastName: 'Snow', firstName: 'Jon', age: 35 },
//    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//];

//export default function DataTable() {
//    return (
//        <div style={{ height: 400, width: '100%' }}>
/*//            <DataGrid*/
//                rows={rows}
//                columns={columns}
//                pageSize={5}
//                rowsPerPageOptions={[5]}
//                checkboxSelection
//            />
//        </div>
//    );
//}