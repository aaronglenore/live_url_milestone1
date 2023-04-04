var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="utf-8" />
          <title>Home</title>
          <style dangerouslySetInnerHTML={{__html: "\n\t\taside {\n\t\t\twidth: 30%;\n\t\t\tpadding-left: 15px;\n\t\t\tmargin-left: 15px;\n\t\t\tfloat: right;\n\t\t\tfont-style: italic;\n\t\t\tbackground-color: lightgray;\n\t\t}\n\t" }} />
          <link rel="stylesheet" href="style.css" type="text/css" /> 
          <main>
            <header role="banner">
              <h1>Welcome to Our Page!</h1>
              <ul className="navbar">
                <li> <a href="index.html">Home</a> </li>
                <li> <a href="list.html">Todo List</a> </li>
                <li> <a href="ViewDetails.html">View Task Detail</a> </li>
              </ul>
            </header>
            <div className="mainbody">
              <h2>Check out some of the features we offer on our todo list!</h2>
              <div className="Features">
                <div className="card">
                  {/* <img> */}
                  <div className="carddetails">
                    Todo list Task 1
                  </div>
                </div>
                {/*Card 2*/}
                <div className="card">
                  {/* <img> */}
                  <div className="carddetails">
                    Todo list Task 2
                  </div>
                </div>
                {/*Card 3*/}
                <div className="card">
                  {/* <img> */}
                  <div className="carddetails">
                    Todo list Task 3
                  </div>
                </div>
              </div>
              <img src="download.png" alt="Todo List" />
            </div>
            <div>
              <p>
                Our website is here to provide information on our skills as HTML programmers! We are here to show off what we are capable
                of with our custom made todo list. Please explore our page and find all of the cool things we can display.
                We hope you enjoy your stay on our page!
              </p>
            </div>
            <p>
              <a href="https://validator.w3.org/#validate_by_upload">Validate</a>
            </p>
          </main>
          <footer>©Group 3</footer>
          {/* <a href="http://validator.w3.org/check?uri=referer">Validate</a> 	 */}
        </div>
      );
    }
  });