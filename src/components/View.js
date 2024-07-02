import TableComponent from './TableComponent';

export default function View() {
    const rows = [
        [159, 6.0, 24],
        [237, 9.0, 37],
        [262, 16.0, 24],
        [305, 3.7, 67],
        [356, 16.0, 49]
    ];

    const columnNames = ['Id', 'Name', 'Friends', 'Actions'];

    return (
        <>
            <TableComponent tableItems={{ rows, columnNames }} />
        </>
    )
};