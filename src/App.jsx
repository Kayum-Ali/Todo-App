

function App() {


  return (
    <>
      <center>
        <h1 class="">Todo App</h1>
        <div class="container text-center">
          <div class="row">
            <div class="col-6">
              <input type="text" placeholder="Enter Todo here" />
            </div>
            <div class="col-4">
              <input type="date" />
            </div>
            <div class="col-2">
              <button class='btn btn-success'>App</button>
            </div>
          </div>


          <div class="row">
            <div class="col-6">
              Buy Milk
            </div>
            <div class="col-4">
              4/10/2024
            </div>
            <div class="col-2">
              <button class="btn btn-danger">Delete</button>
            </div>
          </div>


          <div class="row">
            <div class="col-6">
              Go to Collage
            </div>
            <div class="col-4">
              4/10/2024
            </div>
            <div class="col-2">
              <button class="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>

      </center>


    </>
  )
}

export default App
