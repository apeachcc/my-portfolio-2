import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
// import ProjectGallery from '../components/Gallery';

// const profileImg = require('https://apeachcc.github.io/Bootstrap-Portfolio/images/image-finn.jpeg');

const Home = ({ name, title }) => {
    // return <div>
    //     <section className="splash">
    //         <section>
    //         <img src="https://apeachcc.github.io/Bootstrap-Portfolio/images/image-finn.jpeg"/>
    //         </section>
    //         <section>
    //             <h1>My name is {name}</h1>
    //             <p>Title: {title}</p>
    //         </section>
    //     </section>
    // </div>
    return <div className="homepage">

        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Welcome to Finn's Portfolio</h1>
                <p className="lead">Check out my projects and get in touch!</p>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://apeachcc.github.io/Bootstrap-Portfolio/images/image-finn.jpeg" alt="Profile" className="img-fluid" />
                </div>
                <div className="col-md-4">
                    
                    <h1>About Me</h1>
                    <hr />
                    <p className="lead">A brief bio of {"Finn"}</p>
                    <p className="lead">Title: {"Adventurer"}</p>
                </div>
            </div>
            {/* <h2>Projects</h2> */}
            {/* <ProjectGallery /> */}
        </div>
        {/* <Footer /> */}
    </div>
}


// function Home({ name, title }) {
//     return (
//       <div className="homepage">
//         <Navbar />
//         <div className="container">
//           <div className="jumbotron">
//             <h1 className="display-4">Welcome to My Portfolio</h1>
//             <p className="lead">Check out my projects and get in touch!</p>
//             <button className="btn btn-primary btn-lg">View Projects</button>
//           </div>
//           <div className="row">
//             <div className="col-md-4">
//               <img src={profileImg} alt="Profile Picture" className="img-fluid" />
//             </div>
//             <div className="col-md-8">
//               <h2>About Me</h2>
//               <p className="lead">A brief bio of {name}.</p>
//               <p className="lead">Title: {title}</p>
//             </div>
//           </div>
//           <h2>Projects</h2>
//           <ProjectGallery />
//         </div>
//         <Footer />
//       </div>
//     );
//   }

export default Home;

