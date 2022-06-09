import React from 'react'

function Movie({Movie}) {
  return (
    <div>
        <table class="table">
  <tbody>
    <tr>
      <th scope="row">{Movie.id}</th>
      <td>{Movie.id}</td>
      <td>{Movie.title}</td>
      <td>{Movie.Rate}</td>
      <td>{Movie.Stock}</td>
        <td className='Warn'>DELETE</td>   
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Movie