
<form class="my-5 this-form" id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/mleqbdvg" method="post">
    <div class="mb-3">
      <label for="your_name" class="form-label">Name</label>
      <input type="text" class="form-control" name="name" id="name" required>
    </div>
    <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" placeholder="example@contoso.com" class="form-control" id="exampleInputEmail1 email-address" name="_replyto" aria-describedby="emailHelp" required>
    </div>
    <div class="mb-3">
        <label for="phone" class="form-label">Phone number</label>
        <input type="phone" class="form-control" id="phone" name="phone" aria-describedby="phone" required>
    </div>
    <!-- <div class="mb-3">
        <label for="paymentMethod">Insurance or private pay?</label>
        <select class="form-select" name="paymentMethod" id="paymentMethod" aria-label="Default select example" required>
            <option selected>Select one</option>
            <option value="insurance">Insurance</option>
            <option value="private-pay">Private Pay</option>
        </select>
    </div> -->
    <div class="mb-3">
        <label for="insurance pb-0 mb-0">Who is your insurance provider?</label>
        <p class="text-sm text-red-500 p-0 m-0">Reminder: Insurance is not accepted for couples</p>
        <select class="form-select" name="insurance" id="insurance" aria-label="Default select example" required>
            <option selected>Select one</option>
            <option value="none">N/A</option>
            <option value="anthem">Anthem/BCBS</option>
            <option value="aetna">Aetna</option>
        </select>
    </div>
    <div class="mb-3">
        <label for="therapyType">Individual or couples therapy?</label>
        <select class="form-select" name="therapyType" id="therapyType" aria-label="Default select example" required>
            <option selected>Select one</option>
            <option value="individual">Individual therapy</option>
            <option value="couples">Couples therapy</option>
        </select>
    </div>
    <div class="mb-3">
        <label for="messageText" class="form-label">How can I help?</label>
        <textarea class="form-control" name="messageText" id="messageText" rows="3" required></textarea>
    </div>
    <p class="prose text-xs italic text-red-800">* all fields required</p>
    <button type="" class="btn btn-warning mt-5">Submit</button>  
</form>

<style>
    .this-form {
        /* max-width: 450px; */
    }
</style>