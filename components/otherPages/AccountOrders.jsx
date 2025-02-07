import React from "react";

export default function AccountOrders() {
  return (
    <div className="col-lg-9">
      <div className="page-content my-account__orders-list">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#2416</td>
              <td>October 1, 2023</td>
              <td>On hold</td>
              <td>$1,200.65 for 3 items</td>
              <td>
                <button className="btn btn-primary">VIEW</button>
              </td>
            </tr>
            <tr>
              <td>#2417</td>
              <td>October 2, 2023</td>
              <td>On hold</td>
              <td>$1,200.65 for 3 items</td>
              <td>
                <button className="btn btn-primary">VIEW</button>
              </td>
            </tr>
            <tr>
              <td>#2418</td>
              <td>October 3, 2023</td>
              <td>On hold</td>
              <td>$1,200.65 for 3 items</td>
              <td>
                <button className="btn btn-primary">VIEW</button>
              </td>
            </tr>
            <tr>
              <td>#2419</td>
              <td>October 4, 2023</td>
              <td>On hold</td>
              <td>$1,200.65 for 3 items</td>
              <td>
                <button className="btn btn-primary">VIEW</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
