import '../Css/Alumni.css';



const Almni = () =>{
    return(
        <>
           <div className='bImage'>
                <div className='container'> 
                    <h1 className='PMassage'>
                        ALUMNI
                    </h1>
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className='border'>
                                <h1 className="topcolleges">
                                    Top Colleges Where Alumni Went
                                </h1>
                                <p className='AlumniParagraph'>  
                                    Alumni spread across world's most renowned colleges
                                </p>
                                <button type='button' className='btn' >
                                    India (12)
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Almni;