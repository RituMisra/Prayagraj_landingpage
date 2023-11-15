import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { Services } from './Services'; 
import { Resources } from './Resources';
import  bck_img from './Assets/bck_img.png';

export const Navbar = () => {

    const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);};

    const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
    const resourcesDropdownRef = useRef(null);
  
    const toggleResourcesDropdown = () => {
      setShowResourcesDropdown(!showResourcesDropdown);
    };
    return (
    <>
 <div className='background'>
        <div className='navbar'>
          <div className="nav">
            <h4></h4>
            <ul>
              <li>
                <Link to="/" >Home</Link>
              </li>
            <li className="dropdown" onClick={toggleDropdown}>
      <span className="dropdown-btn">
        Services <i className="dropdown-icon">▼</i>
      </span>
      <div
        ref={dropdownRef}
        className="dropdown-content"
        style={{ display: showDropdown ? 'block' : 'none' }}
      >
        {Services.map((service, index) => (
          <div key={index}>
            <h3>{service.name}</h3>
            {service.submenu && (
              <ul>
                {service.subServices.map((subService, idx) => (
                  <li key={idx}>
                    <Link to={subService.link}>{subService.serviceName}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </li>
  
              <li>About us</li>
              <li>Work</li>
              <li>Contact</li>
              <li className="custom-resources-dropdown" onClick={toggleResourcesDropdown}>
      <span className="custom-resources-dropdown-btn">
        Resources <i className="custom-resources-dropdown-icon">▼</i>
      </span>
      <div
        ref={resourcesDropdownRef}
        className="custom-resources-dropdown-content"
        style={{ display: showResourcesDropdown ? 'block' : 'none' }}
      >
        {Resources.map((resource, index) => (
          <div key={index}>
            <h3>{resource.name}</h3>
            {resource.submenu && (
              <ul>
                {resource.subResources.map((subResource, idx) => (
                  <li key={idx}>
                    <Link to={subResource.link}>{subResource.resourceName}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </li>
            </ul>
            <button>Request a Proposal</button>
          </div>
        </div>

    
        <div class="Middle_container">
  <div class="text-section">
    <h2>Great <span class="Product_style">Product</span> is</h2>
    <h1>built by great <span class="team_style">teams</span></h1>
    <h2>You Imagine. <span class="vCreate">We Create</span></h2>
  </div>
  <div class='imag'>
    <img src={bck_img} alt=""/>
  </div>
</div>


 
<hr className='line'></hr>

<div>
  <h1 className="WDesign">
      Web Design
  </h1>
  <div className="para">
  Our agency web design studio creates marketing websites and landing pages that help to 
tell brand stories, increase conversion and build trust
  </div>

  <div>
    <button className="btn">Request a Proposal</button>
     <span style={{color: 'white'}}>Contact Us </span>
  </div>
</div>
    </div>
    </>
  )
}


