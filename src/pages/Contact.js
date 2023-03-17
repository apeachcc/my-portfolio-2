import React from 'react';

function Contact() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h1 className="text-center">Contact Us</h1>
          <hr />
          <div className="text-center">
            <img src="https://cn.i.cdn.ti-platform.com/content/328/adventure-time/showpage/uk/adventuretime-characters.9f22e681.png?imwidth=1600" width={"500px"} alt="Cartoon Network Contact" />
          </div>
          <p className="mt-4 mb-0 text-center">Need to contact Cartoon Network? Reach out to us using the information below:</p>
          <div className="row mt-4 mb-4">
            <div className="col-md-6 mx-auto">
              <p className="mb-0"><strong>Phone:</strong> 1-800-CARTOON</p>
              <p className="mb-0"><strong>Email:</strong> contact@cartoonnetwork.com</p>
              <p className="mb-0"><strong>Address:</strong> 1234 Cartoon Network St, Burbank, CA 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
