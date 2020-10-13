import React from 'react';
import MedicineRow from './medicineRow';

function medicineList() {
    return(
         <div className="card border-0">
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-4">
                        <p className="px22 text-center text-lg-left">Customer list</p>
                    </div>
                </div>

                <div className="table-responsive">
                    <table className="table table-borderless">
                        <thead className="tbshadow">
                            <tr className="text-center">
                                <td></td>
                                <td>Customer name</td>
                                <td>Medicines</td>
                                <td>Checkout by</td>
                                <td>Amt</td>
                                <td>Visit</td>
                                <td>Order</td>
                                <td>Time</td>
                            </tr>
                        </thead>
                        <tbody>
                            <MedicineRow cusName="Babur Ahmed" medicine="10" checkoutBy="Employee 1" amt="304" visit="First visit" order="On shop" time="11 am" />
                            <MedicineRow cusName="Rupali Domre" medicine="20" checkoutBy="Employee 1" amt="400" visit="First visit" order="Online" time="12 pm" />
                            <MedicineRow cusName="Binni Gupta" medicine="15" checkoutBy="Employee 2" amt="305" visit="Re-visit" order="Online" time="12:30 pm" />
                            <MedicineRow cusName="Rupali Domre" medicine="12" checkoutBy="Employee 1" amt="304" visit="First visit" order="Online" time="12 pm" />
                            <MedicineRow cusName="Binni Gupta" medicine="05" checkoutBy="Employee 2" amt="490" visit="Re-visit" order="On shop" time="12:30 pm" />
                            <MedicineRow cusName="Rupali Domre" medicine="08" checkoutBy="Employee 4" amt="630" visit="First visit" order="On shop" time="12 pm" />
                            <MedicineRow cusName="Binni Gupta" medicine="10" checkoutBy="Employee 1" amt="1000" visit="Re-visit" order="On shop" time="12:30 pm" />
                            <MedicineRow cusName="Rupali Domre" medicine="40" checkoutBy="Employee 1" amt="390" visit="First visit" order="On shop" time="12 pm" />
                            <MedicineRow cusName="Binni Gupta" medicine="12" checkoutBy="Employee 1" amt="470" visit="Re-visit" order="On shop" time="12:30 pm" />
                            
                        </tbody>
                    </table>
                </div>

                
                    
            </div>
        </div>
    );
}

export default medicineList;