import React from 'react';


function medicineRow(props) {
    return (
        <tr className="text-center">
            <td><p className="greyCircle"></p></td>
            <td>{props.cusName}</td>
            <td>{props.medicine}</td>
            <td>{props.checkoutBy}</td>
            <td>{props.amt}</td>
            <td>{props.visit}</td>
            <td>{props.order}</td>
            <td>{props.time}</td>
        </tr>
    );
}

export default medicineRow;