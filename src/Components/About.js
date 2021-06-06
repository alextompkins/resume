import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name.first + ' ' + this.props.data.name.last;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var city = this.props.data.location.city;
      var country = this.props.data.location.country;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var pdfUrl = this.props.data.pdfUrl;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Alex Tompkins Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="location">
						   <span>{name}</span><br />
						   <span>{city}</span><br />
						   <span>{country}</span><br />
						   <span>{phone}</span><br />
                            <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={pdfUrl} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
