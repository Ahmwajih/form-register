import Table from 'react-bootstrap/Table';

function Mytable({firstName, lastName, userName, city, state, zip, check}) {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                    <th>Check</th>


                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{userName}</td>
                    <td>{city}</td>
                    <td>{state}</td>
                    <td>{zip}</td>
                    <td>{check? 'true': 'false'}</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Mytable;