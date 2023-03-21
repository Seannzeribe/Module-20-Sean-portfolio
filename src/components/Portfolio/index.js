import React from "react";
import codeEditor from "../../assets/small/codeEditor.png";
import NoSql from "../../assets/small/nosql.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Seannzeribe/Module-19-code-editor">
                {" "}
                <img
                  src={codeEditor}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="SummerPunch"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Code Editor</h4>
              <p>
                A website which offers users to input a code, gives them space to write anything, with the delete functionality as well.
                Everything is dynamic, the code get's stored in the database, also the app is downloadable and works offline as well.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/Seannzeribe/Module-18NoSql">
                {" "}
                <img
                  src={NoSql}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="project"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>No SQl API's demo</h4>
              <p>
                A NoSql Application which is used to build API's using MongoDb database.
                The whole CRUD functionality is applied and tested using Insomnia. 
                Users can add themselves, create friends, like posts and add thoughts to them as well.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
