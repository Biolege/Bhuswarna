import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

function Monthly_revenue() {

    const [chart,setChart] = useState({
        chartData:{
            labels: ['','','','','','','','','','','','','','','','','','','','','','','','',''],
            datasets:[
                {
                    label: 'Revenue',
                    data:[
                    60,
                    55,
                    60,
                    55,
                    60,
                    55,
                    78,
                    78,
                    78,
                    78,
                    78,
                    78,
                    78,
                    78,
                    78,
                    78,
                    78,
                    78,
                    78,
                    78,
                    78,
                    78,
                    78,
                    78,
                    78
                    ],
                    backgroundColor: [
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                        'rgba(133,92,248,0.6)',
                    ]
                }
            ]
            
        }
    })

    const { chartData } = chart

    return (
        <div className="card border-0" style={{height: '15rem'}}>
            <div className="card-body">
                <div className="row">
                    <div className="col-8">
                        <p className="px18">Total revenue in July  rs 45,000</p>
                    </div>
                    <div className="col-3 ml-auto">
                        <p className="px24 text-right">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" height="25px" width="25px" data-icon="calendar" class="svg-inline--fa fa-calendar fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z"></path>
                        </svg> July
                        </p>
                    </div>


                    <div className="col-12">
                        <div className="Chart">
                        <Bar
                            data={chartData}
                            options={{
                                maintainAspectRatio: false,
                                responsive: 'true'
                            }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Monthly_revenue;