import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addAPI } from "./actions/index";

function TableApi() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(` https://pokeapi.co/api/v2/pokemon?limit=5`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        const data1 = Object.assign({}, data.results);
        dispatch(addAPI(data1));
      });
  }, [dispatch]);

  const pokemonData = useSelector((state) => state.api);

  const getPokemonRow = (pokemonId) => {
    const pokemon = pokemonData[pokemonId];
    console.log("getPokemonRow");
    return (
      <TableRow
        key={pokemonId}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th">{pokemon.name}</TableCell>
        <TableCell align="center">{pokemon.url}</TableCell>
        <TableCell align="center">{pokemon.weight}</TableCell>
      </TableRow>
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell align="center">Height</TableCell>
            <TableCell align="center">Weight</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemonData &&
            Object.keys(pokemonData).map((pokemonId) =>
              getPokemonRow(pokemonId)
            )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableApi;
