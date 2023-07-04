import React from 'react'

const DashboardOrder = () => {
    return (
        <div>
            <div className="" style={{ padding: '10px 20px' }}>
                <h5>Orders</h5>
                <input style={{ padding: '0px 10px', borderRadius: '4px', border: '1px solid rgb(32, 158, 148)', outline: '0' }} type="search" id="" placeholder='Search Orders' />
                <select style={{ float: 'right', padding: '5px', margin: '0 10px' }}>
                    <option value="">Select Status</option>
                    <option value="">All</option>
                    <option value="">Paid</option>
                    <option value="">Not Paid</option>
                </select>

            </div>
            <table className='customers'>

                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Details</th>
                </tr>
                <tr className='recent-order'>
                    <td>Adams</td>
                    <td>adamsokonka@gmail.com</td>
                    <td>$300.78</td>
                    <td><span style={{ backgroundColor: 'red', padding: '6px 10px', color: 'white', borderRadius: '9px' }}>Not paid</span> </td>

                    <td>01/10/2022</td>
                    <td><button>Details</button></td>
                </tr>
                <tr className='recent-order'>
                    <td>Adams</td>
                    <td>adamsokonka@gmail.com</td>
                    <td>$300.78</td>
                    <td><span style={{ backgroundColor: 'red', padding: '6px 10px', color: 'white', borderRadius: '9px' }}>Not paid</span> </td>

                    <td>01/10/2022</td>
                    <td><button>Details</button></td>
                </tr>
                <tr className='recent-order'>
                    <td>Adams</td>
                    <td>adamsokonka@gmail.com</td>
                    <td>$300.78</td>
                    <td><span style={{ backgroundColor: 'red', padding: '6px 10px', color: 'white', borderRadius: '9px' }}>Not paid</span> </td>
                    <td>01/10/2022</td>
                    <td><button>Details</button></td>
                </tr>
            </table>
        </div>
    )
}

export default DashboardOrder