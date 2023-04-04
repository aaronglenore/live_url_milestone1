var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="utf-8" />
          <title>Create Task</title>
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
            <div className="taskPage">
              <div className="detail">
                <form action="/list.html">
                  <label htmlFor="taskName">Task Name: </label>
                  <input type="text" id="taskName" name="taskName" maxLength={16} /><br /><br />
                  <label htmlFor="cat">Category: </label>
                  <select id="cat" name="cat">
                    <option value="school">School</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                  </select> 
                  <label htmlFor="status">Status: </label>
                  <select id="status" name="status">
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="in progress">In Progress</option>
                  </select> <br /><br />
                  <label htmlFor="details">Details: </label>
                  <textarea id="details" name="details" rows={4} cols={50} defaultValue={""} /><br /><br />
                  <label htmlFor="location">Location: </label>
                  <input type="text" id="location" name="location" maxLength={16} /><br /><br />
                  <label htmlFor="dateCreated">Date Created:</label>
                  <input type="date" id="dateCreated" name="dateCreated" />
                  <label htmlFor="dateDue">Date Due:</label>
                  <input type="date" id="dateDue" name="dateDue" /><br /><br />
                  <input type="submit" />
                </form>
              </div>
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