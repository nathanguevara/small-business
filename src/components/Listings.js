import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {Link, useParams } from "react-router-dom"
import DeleteIcon from "@mui/icons-material/Delete";
import { checkAuth } from "../Router";

const Listings = (props) => {
    let id = useParams();
	console.log("id being pulled",id);

  return (
    <Container maxWidth="lg" className="car-container">
      <h4>User: {props.user.username}</h4>
      <div className="flex-container">
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Business</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Operating Hours</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((store, idx) => (
            <TableRow key={store.id}>
              <TableCell > <Link to={`/Listings/${store.id}`}>{store.business}</Link></TableCell>
             
              <TableCell>{store["description"]}</TableCell>
              <TableCell>{store["address"]}</TableCell>
              <TableCell>{store["open"]}</TableCell>
              {checkAuth() ? (
              <TableCell>
                <DeleteIcon
                  onClick={() => props.removeListing(idx)}
                  className="icon text-red"
                />
              </TableCell>
              ) : null}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Listings;