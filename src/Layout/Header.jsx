import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row bg-dark text-white">
                    <div className="col-12 col-md-3 text-center">
                        <a className="navbar-brand fs-3 fw-bold" href="#">Navbar</a>

                    </div>
                    <div className="col-12 col-md-6 py-1 ">
                        <form className="d-flex py-1" role="search">
                            <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn mybuttoncolor" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="col-12 col-md-3 fs-3 d-flex justify-content-evenly">
                        <Link to='/login'>
                            <i className="bi bi-box-arrow-in-left"></i>
                        </Link>
                        <Link to='/register'>
                            <i className='bi bi-person-plus'></i>
                        </Link>
                        <Link to='/cart'>
                            <i className='bi bi-cart'></i>
                        </Link>

                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg bg-slate-200 text-black">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blogs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header