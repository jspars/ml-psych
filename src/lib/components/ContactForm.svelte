<form class="my-5 this-form" id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/mleqbdvg" method="post">
    <div class="mb-3">
      <label for="your_name" class="form-label">Name*</label>
      <input type="text" class="form-control" name="name" id="name" required>
    </div>
    <div class="mb-3">
        <label for="email" class="form-label">Email address*</label>
        <input type="email" placeholder="example@contoso.com" class="form-control" id="exampleInputEmail1 email-address" name="_replyto" aria-describedby="emailHelp" required>
    </div>
    <div class="mb-3">
        <label for="phone" class="form-label">Phone number*</label>
        <input type="phone" class="form-control" id="phone" name="phone" aria-describedby="phone" required>
    </div>
    <div class="mb-3">
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1 private-pay">
            <label class="form-check-label" for="flexRadioDefault1">
                Private pay
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2 insurance-pay" checked>
            <label class="form-check-label" for="flexRadioDefault2">
                Insurance
            </label>
        </div>
    </div>
    <div class="mb-3">
        <select class="form-select" name="insurance" id="insurance" aria-label="Default select example">
            <option selected>Who is your insurance provider?</option>
            <option value="none">N/A</option>
            <option value="anthem">Anthem/BCBS</option>
            <option value="aetna">Aetna</option>
        </select>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="individuals-or-couples" id="individuals-or-couples1 individual-therapy" checked>
        <label class="form-check-label" for="individuals-or-couples1">
          Individual therapy
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="individuals-or-couples" id="individuals-or-couples2 couples-therapy">
        <label class="form-check-label" for="individuals-or-couples2">
          Couples therapy
        </label>
      </div>
      <p class="prose text-xs italic">* required fields</p>
    <button type="" class="btn btn-warning mt-5">Submit</button>
</form>

<style>
    .this-form {
        max-width: 450px;
    }
    </style>