/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import key from 'uniqid';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import useRefreshToken from '../../../hooks/useRefreshToken';

function users() {
  const [users, setUsers] = useState();
  const axiosPrivate = useAxiosPrivate();
  const refresh = useRefreshToken();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get('/user/allusers', {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);
  return (
    <div className="users">
      <div className="div1 p-3 my-3">
        <button onClick={() => refresh()}>Refresh</button>
      </div>
      <div className="div2 p-3 my-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Basic Datatable</h5>
            <div className="table-responsive data-table">
              <table
                id="zero_config"
                className="table table-striped table-bordered"
              >
                <thead>
                  <tr>
                    <td>Id</td>
                    <td>Email</td>
                    <td>Role</td>
                    <td>Verified</td>
                    <td>Blocked</td>
                    <td>Created At</td>
                    <td>Info</td>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map(() => (
                    <tr key={key()}>
                      <td>Id</td>
                      <td>Email</td>
                      <td>Role</td>
                      <td>Verified</td>
                      <td>Blocked</td>
                      <td>Created At</td>
                      <td>Info</td>
                    </tr>
                  ))}
                </tbody>
                {/* <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                  </tr>
                </tfoot> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default users;
