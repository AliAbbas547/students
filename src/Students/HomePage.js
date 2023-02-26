import React from 'react'

 function HomePage() {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/userRegistration">UserRegistration</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/userLogin">UserLogin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/getUserData">getUserData</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/updateData">UpdateData</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">DeleteData</a>
        </li>
       </ul>

       </div>
  </div>
</nav>


       <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg" className="d-block w-100 h-500" alt="Nature"/>
    </div>
    <div className="carousel-item">
      <img src="https://media.gettyimages.com/id/470621161/photo/television-screen-in-dramatic-landscape.jpg?s=612x612&w=gi&k=20&c=HGwHgyjdGvmoCgLaA5UMAoZzSi-hNFy-Sxi7Acwaqp8=" className="d-block w-100 h-500" alt="Nature"/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_960_720.jpg" className="d-block w-100 h-500" alt="Nature"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}
export default HomePage;
