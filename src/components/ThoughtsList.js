import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../Css/style.css";
import Checkbox from "@mui/material/Checkbox";

const ThoughtsList = (props) => {
  return (
    <div className="journalTable">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className="tableHeading" align="center">
                Thoughts for the day{" "}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.contactsMap.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  {" "}
                  {"Date: " + row.date} <br /> <Checkbox></Checkbox>
                  {row.msg}{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ThoughtsList;

// {object}
