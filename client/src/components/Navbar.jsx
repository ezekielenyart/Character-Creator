import React from 'react'

function Navbar () {
    return (
        <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">HeroCraft</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="./">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="./roster">Roster</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="./create">Craft a Hero</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
</nav>
</div>

    )

}


export default Navbar