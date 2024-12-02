import Home from  './Component/Home';
import Admission from './Component/Admission';

import Contact from './Component/Contact';

import { HashRouter,Routes,Route,Link } from 'react-router-dom';

function App(){

    return (
        <HashRouter>
            {/* Second Navbar */}
            <nav className="navbar  navbar-expand-lg bg-body-green">
                <div className="container-fluid">
                    <Link className= "navbar-brand">
                        <label className='Color'>JPS <span>SCHOOL</span></label>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/Home' >HOME</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ABOUT
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item"  >About Us</Link></li>
                                    <li><Link className="dropdown-item" >Our Story</Link></li>
                                    <li><Link className="dropdown-item" >CBSE Affilation</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" >Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                     ACADEMICS
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" >Senior Secondary School </Link></li>
                                    <li><Link className="dropdown-item" >Secondary School</Link></li>
                                    <li><Link className="dropdown-item" > CBSE Faculties</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" >Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                     LIFE AT JPS
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" >Life Skills</Link></li>
                                    <li><Link className="dropdown-item" >Activities</Link></li>
                                    <li><Link className="dropdown-item" >Job Opening</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" >Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                     RESULT
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" >Class 12th result</Link></li>
                                    <li><Link className="dropdown-item" >Class 10th result</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" >Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                     NEWS & EVENT
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" >News</Link></li>
                                    <li><Link className="dropdown-item" >Media Coverage</Link></li>
                                    <li><Link className="dropdown-item" >Gallery</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" >Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/Admission' >ADIMISSION</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" >ALUMNI</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/Contact' >CONTACT US</Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
            
            

        
            <Routes>
                <Route path ='/Home' element={<Home />}></Route>
                <Route path='/Admission' element={<Admission />}></Route>
                <Route path='/Contact' element={<Contact />}></Route>

            </Routes>
            <div className='Footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <h2>Jindal <span>Public School</span></h2>
                            <h5><Link className="nav-link active" >Senior Secondary School</Link></h5>
                            <h5><Link className="nav-link active" >Secondary School</Link></h5>
                            <h5><Link className="nav-link active" >Notices</Link></h5>
                            <h5><Link className="nav-link active" >CBSE Circular</Link></h5>
                        </div>
                        <br />
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <h3>Quick Links</h3>
                            <h5><Link className="nav-link active" >Senior Secondary School</Link></h5>
                            <h5><Link className="nav-link active" >Secondary School</Link></h5>
                            <h5><Link className="nav-link active" >Notices</Link></h5>
                            <h5><Link className="nav-link active" >CBSE Circular</Link></h5>
                        </div>
                        <br />
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <h3>Life@JPS</h3>
                            <h5><Link className="nav-link active" >Life Skills</Link></h5>
                            <h5><Link className="nav-link active" >Activities</Link></h5>
                            <h5><Link className="nav-link active" >Parent's Testimonials</Link></h5>
                            <h5><Link className="nav-link active" >Job Opening</Link></h5>
                        </div>
                        <br />
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <h3>Infrastucture</h3>
                            <h5><Link className="nav-link active" >Campus Facilities</Link></h5>
                            <h5><Link className="nav-link active" >Residential Facilities</Link></h5>
                            <h5><Link className="nav-link active" >Labs</Link></h5>
                            <h5><Link className="nav-link active" >Sports</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
        </HashRouter>
    )
}

export default App;
