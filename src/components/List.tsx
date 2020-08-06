import React from "react";
import Table from "react-bootstrap/Table";
import { fakeRecipe } from "../Mock";

const List: React.FC = () => {
  console.log(fakeRecipe);
  return (
    <div className="List">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>box</th>
            <th>Item</th>
            <th>unit</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>uhh</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default List;
