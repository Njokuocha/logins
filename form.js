document.getElementById("form-container").innerHTML += `
<form action="" id="form">
<div class="intro">
    <img src="./user.png">
    <h2>Login form</h2>
</div>
<section class="form-holder">
<section id="first-sec">
    <div>
        <input type="text" id="fname" required>
        <label for="fname">First name</label>
    </div>
    <div>
        <input type="text" id="sname" required>
        <label for="sname">Surname</label>
    </div>
    <div>
        <input type="text" id="lname" required>
        <label for="lname">Last name</label>
    </div>
    <div>
        <input type="text" id="pnumber" inputmode="numeric" maxlength="9" required>
        <label for="pnumber">Phone number</label>
    </div>
    <div>
        <input type="pass" id="pass" required>
        <label for="pass">Password</label>
    </div>
</section>
<section id="second-sec">
    <div>
        <input type="text" id="so" required>
        <label for="so">State of origin</label>
    </div>
    <div>
        <input type="text" id="nation" required>
        <label for="nation">Nationality</label>
    </div>
    <div>
        <input type="text" id="lga" required>
        <label for="lga">L.G.A</label>
    </div>
    <div>
        <input type="text" id="email" inputmode="numeric" maxlength="9" required>
        <label for="email">Email</label>
    </div>
    <div>
        <input type="pass" id="reg" required>
        <label for="reg">Reg. NO</label>
    </div>
</section>
</section>

<button type="button" onclick="newForm()">Submit</button>

</form>
`;

newForm = () =>{
    document.getElementById("first-sec").classList.add("right-move");
    document.getElementById("second-sec").style.display = "block";
}





























