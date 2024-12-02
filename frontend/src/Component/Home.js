
import '../Css/Home.css';

const Home = () =>{

    return (
        <>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="../Picture/FIrstSchool.jpg" className="d-block " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="../Picture/Ground1.jpg" className="d-block " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="../Picture/Library.jpg" className="d-block " alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <br /><br />
            {/* Card items */}
            

            <div className="container">
            <h3 className="Color">Jindal <span>Jesa koi Nahi</span></h3>
            <p className="Para">Limitless learning, more possibilities</p>
            <br /><br />
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card">
                            <img src="../Picture/Campus.jpg" alt="Card image" />
                            <div className="card-body">
                                <h5 className="card-title">Our Student</h5>
                                <p className="card-text">Campus Facilities</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="col-lg-3 col-md-4 col-sm-6 ">
                        <div className="card">
                            <img src="../Picture/Labs.jpg" alt="Card image" />
                            <div className="card-body">
                                <h5 className="card-title">Our Labs</h5>
                                <p className="card-text">Some quick example text.</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="col-lg-3 col-md-4 col-sm-6 ">
                        <div className="card">
                            <img src="../Picture/Sports.jpg" alt="Card image" />
                            <div className="card-body">
                                <h5 className="card-title">Sports</h5>
                                <p className="card-text">Some quick example text.</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="col-lg-3 col-md-6 col-sm-6 ">
                        <div className="card">
                            <img src="../Picture/Residiential.jpg" alt="Card image" />
                            <div className="card-body">
                                <h5 className="card-title">Residiential Fasilities</h5>
                                <p className="card-text">Some quick example text.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="card">
                            <div className="Fafaicon"> 
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Aligned Curriculum and Consistent Learning Pace
                                </h5>
                                <p className="card-text">
                                    In JINDAL PUBLIC SCHOOL, the curriculum for high school academics and entrance exams is aligned,
                                    ensuring that the students aren’t learning different concepts or facing repeated content. 
                                    This reduces confusion and help them focus on both school exams and entrance exams without overload.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                Balanced Focus on Boards and Entrance Exams
                                </h5>
                                <p className="card-text">
                                    Balanced Focus on Boards and Entrance Exams
                                    Here at JUPITER PUBLIC SCHOOL, we maintain a dual focus on board exams and entrance tests.
                                    Unlike other schools or standalone coaching centers, which might prioritize entrance prep, we balance both,
                                    helping students excel in their board exams while preparing for entrance exams.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Time Efficiency</h5>
                                <p className="card-text">
                                    Students save commuting time as they attend both academic classNamees and coaching in the same place.
                                    This leaves more time for self-study, rest, 
                                    and extracurricular activities, enhancing overall learning and well-being.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    Personalized Attention and Familiar Environment
                                </h5>
                                <p className="card-text">
                                    Personalized Attention and Familiar Environment
                                    Teachers in JUPITER PUBLIC SCHOOL know the students’ academic strengths and weaknesses,
                                    providing more personalized support compared to other schools or coaching center, 
                                    where teachers might not be as aware of each student’s unique needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Reduced Stress</h5>
                                <p className="card-text">
                                    
                                    Reduced Stress
                                    The workload and expectations in JINDAL PUBLIC SCHOOL are designed to minimize stress,
                                    as the school structure itself prioritizes both academic and exam-preparation outcomes. Additionally, 
                                    managing only one institution rather than two helps reduce administrative and mental stress.                                    
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Better Academic Support</h5>
                                <p className="card-text">
                                    Better Academic Support
                                    Here at JUPITER PUBLIC SCHOOL, Students have access to a full range of academic resources like libraries,
                                    labs, and experienced school faculty, 
                                    giving them a more holistic education experience than coaching centers alone.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Home ;