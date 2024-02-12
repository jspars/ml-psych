<form class="my-5 this-form">
    <div class="mb-3">
      <label for="your_name" class="form-label">Name</label>
      <input type="text" class="form-control" id="your_name">
    </div>
    <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
        <label for="phone" class="form-label">Phone number</label>
        <input type="phone" class="form-control" id="phone" aria-describedby="phone">
        <div id="phonelHelp" class="form-text italic text-red-800 text-xs ml-2">We'll never share your personal information with anyone else.</div>
    </div>
    <div class="mb-3">
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
              Private pay
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
              Insurance
            </label>
          </div>
    </div>
    <div class="mb-3">
        <select class="form-select" aria-label="Default select example">
            <option selected>Who is your insurance provider?</option>
            <option value="none">N/A</option>
            <option value="anthem">Anthem/BCBS</option>
            <option value="aetna">Aetna</option>
        </select>
    </div>
    <button type="" class="btn btn-primary btn-lg mt-5">Submit</button>
  </form>

  <style>
    .this-form {
        max-width: 450px;
    }
  </style>