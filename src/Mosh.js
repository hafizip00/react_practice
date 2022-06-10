import React, { Component } from "react";

const Movies = [
  {
    id: 1,
    title: "Die Hard",
    Rate: 3.4,
    stock: 4,
  },
  {
    id: 2,
    title: "Die Hard II",
    Rate: 3.4,
    stock: 4,
  },
  {
    id: 3,
    title: "Die Hard III",
    Rate: 3.4,
    stock: 4,
  },
  {
    id: 4,
    title: "Die Hard IV",
    Rate: 3.4,
    stock: 4,
  },
];

export class Mosh extends Component {

    state = {
      movies : Movies
    };

    HandleDelelte = (MOO) =>{
        const NewMOvies = this.state.movies.filter( mob=>  mob.id !== MOO.id)
        this.setState({movies : NewMOvies});
    }

  render() {
    return (
      <main className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">TITLE</th>
              <th scope="col">RATE</th>
            </tr>
          </thead>
          <tbody>
        {this.state.movies.map (movie => (
          <tr key={movie.id}>
            <td>{movie.id}</td>
            <td>{movie.title}</td>
            <td>{movie.Rate}</td>
            <td>{movie.stock}</td>
            <td><button className="btn btn-danger btn-sm" onClick={ () => this.HandleDelelte(movie)}>Delete</button></td>
          </tr>
        ))}
  </tbody>
        </table>
      </main>
    );
  }
}

export default Mosh;
