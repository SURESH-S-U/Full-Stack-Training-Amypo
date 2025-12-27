import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div>

    {/* <!-- Footer Section --> */}
    
    <footer class="bg-dark text-light mt-4">
        
        {/* <!-- Container Fluid For Footer gives margin inside the footer. Footer Must be cover full page size. --> */}
        <div class="container-fluid">

            <div class="row pt-4">

                {/* <!-- col 1 for Text --> */}
                <div class="col text-center"> 
                    <h5>Bannari Amman Institute Of Technology</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, distinctio. Officia dolor porro eius nam ea provident, totam reiciendis rem.</p>
                </div>

                {/* <!-- Col 2 for Links --> */}
                <div class="col text-center">
                    <h5>Quick Links</h5>
                </div>

                {/* <!-- col 3 for Button --> */}
                <div class="col">
                    <h5>BIT login</h5>
                    <p>Login to our LMS portal and enjoy the greater learning experience</p>
                    <button class="btn btn-danger">Login</button>
                </div>

            </div>


            {/* <!-- New Row for Coypright --> */}
            <hr />
            <div class="text-center pb-3">
                &copy; 2025 | Bannari Amman Institute of Technology | All rights reserved
            </div>

        </div>

    </footer>
    {/* <!-- Footer Ends --> */}

    </div>
  )
}

export default Footer