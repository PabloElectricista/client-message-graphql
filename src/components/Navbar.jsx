function Navbar() {

  return <nav className="navbar  navbar-expand-lg bg-light">
    <div className="container justify-content-evenly">
      <div class="nav-item">
        <a className="navbar-brand fw-bold bg-info px-3" href="/">Simple GraphQl aplication</a>
      </div>
      <div className="nav-item">
        <a className="btn btn-primary mx-3" href="/list">List messages</a>
        <a className="btn btn-secondary mx-3" href="/messageform/0">Send message</a>
      </div>
    </div>
  </nav>
}

export default Navbar;