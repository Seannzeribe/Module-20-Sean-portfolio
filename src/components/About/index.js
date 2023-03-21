import React from "react";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src="https://media.licdn.com/dms/image/C5603AQHQnqlzizfaig/profile-displayphoto-shrink_400_400/0/1629955946194?e=1684972800&v=beta&t=OZ4ZJGAV1mwTzU-_W4aeTcl-9f0JNJ_dNYbgn4lzoQc" style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hello, I’m Sean Nzeribe and my hobbies are baseball, golf, and coding. Currently, I am studying JavaScript web design at UCLA EXTENSION to become a full stack developer. My favorite side of coding would have to be front end. I have 6 months of experience with web developement and aspire to professional developer in this industry!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
