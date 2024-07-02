import React, { useState } from 'react';
import TableComponent from './TableComponent';
import Button from './Button';
import FormModal from './FormModal';

export default function UsersList() {

    const headingStyle = { color: 'red' };
    const rows = [
        [159, 6.0, 24],
        [237, 9.0, 37],
        [262, 16.0, 24],
        [305, 3.7, 67],
        [356, 16.0, 49]
    ];
    const columnNames = ['Id', 'Name', 'Friends', 'Actions'];
    const r = [{ Id: 1, Name: "Arun", Friends: 10, }, { Id: 2, Name: "Jhon", Friends: 20, }]

    const [isOpen, setIsOpen] = useState(false);
    const [row, setRows] = useState(r);

    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    const addRows = (e) => {
        const updatedRow = {};
        columnNames.map((ele) => {
            if (ele !== 'Actions')
                updatedRow[ele] = ele in e ? e[ele] : '-'
        });
        r.push(updatedRow);
        setRows(r);
    }

    return (
        <>
            <h1 style={headingStyle}>User List</h1>
            <div style={{ margin: "5vh 20vw", float: "left" }}>
                <Button text="Add User" cutomStyle={{ backgroundColor: '#ffb84d' }} openModal={openModal} handleClose={closeModal} />
            </div>

            <FormModal isOpen={isOpen} handleClose={closeModal} addRows={addRows} />
            <TableComponent tableItems={{ row, columnNames }} />
        </>
    );
};