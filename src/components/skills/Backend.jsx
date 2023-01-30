import React from 'react'

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <h3 className="skills__name">Nodejs</h3>
                        <i class='bx bxl-nodejs'></i>
                    </div>
             

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <h3 className="skills__name">mongodb</h3>
                        <i class='bx bxl-mongodb' ></i>
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <h3 className="skills__name">Firebase</h3>
                        <i class='bx bxl-firebase' ></i>
                    </div>
                

                </div>

                <div className="skills__group">

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <h3 className="skills__name">Express</h3>
                        <i class='bx bxl-nodejs' ></i>
                    </div>
                   

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <h3 className="skills__name">mysql</h3>
                    </div>
                 

                    
                    <div className="skills__data">
                        {/* <i className='bx bx-badge-check'></i> */}

                        <h3 className="skills__name"></h3>
                    </div>




                </div>
            </div>
        </div>
    )
}

export default Backend