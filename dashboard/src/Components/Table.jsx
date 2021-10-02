import React from "react";
import "./table.css";
export default function Table() {
  return (
    <div className="container">
      <div className="lastsection container">
        <h1>Standard Table Design</h1>
        <table class="table">
          <thead>
            <tr className="black">
              <th scope="col">Name</th>
              <th scope="col">E-mail</th>
              <th scope="col">User Type</th>
              <th scope="col">Joined</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody className="gray">
            <tr>
              <th scope="row">Mike Bhand</th>
              <td>mikebhand@gmail.com</td>
              <td>Admin</td>
              <td>25,April,2018</td>
              <td>Pending</td>
            </tr>
            <tr>
              <th scope="row">Kevin Peterson</th>
              <td>kevinpetersin123@gmail.com</td>
              <td>Editor</td>
              <td>25,April,2018</td>
              <td>Pending</td>
            </tr>
            <tr>
              <th scope="row">Tony Stark</th>
              <td>stacrks456@gmail.com</td>
              <td>Admin</td>
              <td>25,April,2018</td>
              <td>Approved</td>
            </tr>
            <tr>
              <th scope="row">Harvey Specter</th>
              <td>harvey007d@gmail.com</td>
              <td>Admin</td>
              <td>25,April,2018</td>
              <td>Approved</td>
            </tr>
            <tr>
              <th scope="row">Mike Ross</th>
              <td>rossmike845@gmail.com</td>
              <td>Suscriber</td>
              <td>25,April,2018</td>
              <td>Reject</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
