var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
          {/* <link rel ="stylesheet" href="style.css" type="text/css">  */}
          <title>My Todo List</title>
          <ul className="flex justify-center">
            <li className="mr-5"> <a href="index.html">Home</a> </li>
            <li className="mr-5"> <a href="list.html">Todo List</a> </li>
            <li className="mr-5"> <a href="ViewDetails.html">View Task Detail</a> </li>
          </ul>
          <h1 className="text-2xl font-bold mb-4">My Todo List</h1>
          <div className="flex mb-4">
            <div className="w-1/2 mr-4">
              <h2 className="text-lg font-medium mb-2">Important</h2>
              <ul className="list-none">
                <li className="bg-red-500 rounded p-2 mb-2 text-white">
                  <label className="block">
                    <input type="checkbox" className="mr-2 leading-tight" />
                    <span>Submit report</span>
                  </label>
                  <div className="flex">
                    <a href="ViewDetails.html" className="bg-blue-500 rounded p-2 mb-2 text-white mr-2">View details</a>
                    <a href="ViewDetails.html" className="bg-blue-500 rounded p-2 mb-2 text-white mr-2">Delete</a>
                    <a href="ViewDetails.html" className="bg-blue-500 rounded p-2 mb-2 text-white mr-2">Update</a>
                  </div>
                </li>
                <li className="bg-red-500 rounded p-2 mb-2 text-white">
                  <label className="block">
                    <input type="checkbox" className="mr-2 leading-tight" />
                    <span>Attend meeting</span>
                  </label>
                  <div className="flex">
                    <a href="ViewDetails.html" className="bg-blue-500 rounded p-2 mb-2 text-white mr-2">View details</a>
                    <a href="ViewDetails.html" className="bg-blue-500 rounded p-2 mb-2 text-white mr-2">Delete</a>
                    <a href="ViewDetails.html" className="bg-blue-500 rounded p-2 mb-2 text-white mr-2">Update</a>
                  </div>
                </li>
                <li className="bg-red-500 rounded p-2 mb-2 text-white">
                  <label className="block">
                    <input type="checkbox" className="mr-2 leading-tight" />
                    <span>Write blog post</span>
                  </label>
                  <div className="flex">
                    <a href="ViewDetails.html" className="bg-blue-500 rounded p-2 mb-2 text-white mr-2">View details</a>
                    <a href="ViewDetails.html" className="bg-blue-500 rounded p-2 mb-2 text-white mr-2">Delete</a>
                    <a href="ViewDetails.html" className="bg-blue-500 rounded p-2 mb-2 text-white mr-2">Update</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <h2 className="text-lg font-medium mb-2">Not Important</h2>
              <ul className="list-none">
                <li className="bg-gray-300 rounded p-2 mb-2">
                  <label className="block">
                    <input type="checkbox" className="mr-2 leading-tight" />
                    <span>Watch movie</span>
                  </label>
                  <div className="flex">
                    <a href="ViewDetails.html" className="bg-blue-500 rounded p-2 mb-2 text-white mr-2">View details</a>
                    <a href="ViewDetails.html" className="bg-blue-500 rounded p-2 mb-2 text-white mr-2">Delete</a>
                    <a href="ViewDetails.html" className="bg-blue-500 rounded p-2 mb-2 text-white mr-2">Update</a>
                  </div>
                </li>
                <li className="bg-gray-300 rounded p-2 mb-2">
                  <label className="block">
                    <input type="checkbox" className="mr-2 leading-tight" />
                    <span>Take a walk</span>
                  </label>
                  <div className="flex">
                    <a href="ViewDetails.html" className="bg-blue-500 rounded p-2 mb-2 text-white mr-2">View details</a>
                    <a href="ViewDetails.html" className="bg-blue-500 rounded p-2 mb-2 text-white mr-2">Delete</a>
                    <a href="ViewDetails.html" className="bg-blue-500 rounded p-2 mb-2 text-white mr-2">Update</a>
                  </div>
                </li>
                <li className="bg-gray-300 rounded p-2 mb-2">
                  <label className="block">
                    <input type="checkbox" className="mr-2 leading-tight" />
                    <span>Read a book</span>
                  </label>
                  <div className="flex">
                    <a href="ViewDetails.html" className="bg-blue-500 rounded p-2 mb-2 text-white mr-2">View details</a>
                    <a href="ViewDetails.html" className="bg-blue-500 rounded p-2 mb-2 text-white mr-2">Delete</a>
                    <a href="ViewDetails.html" className="bg-blue-500 rounded p-2 mb-2 text-white mr-2">Update</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <button className="bg-green-300 m-2 ml-0 p-3 rounded-full text-gray-600 font-bold" onclick="window.location.href = 'createTask.html';">Create New Task</button>
          <footer>©Group 3</footer>
        </div>
      );
    }
  });