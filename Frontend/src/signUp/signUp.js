

const SignUp = () =>{
  return (
      <div className="test">
        <form>
          <div class="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr></hr>

               
              <label for="email"><b>Email</b></label>
              <div className = "container2">
                <input className= "signUp-email" type="text" placeholder="Enter Email" name="email" required ></input>
              </div>
            

            
              <label for="psw"><b>Password</b></label>
              <div className = "container3">
                <input className= "signUp-password" type="password" placeholder="Enter Password" name="psw" required ></input>
              </div>
            

              
              <label for="psw-repeat"><b>Repeat Password</b></label>
              <div className="container4">
                <input className= "signUp-repeatPassword" type="password" placeholder="Repeat Password" name="psw-repeat" required ></input>
              </div>
            

            <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>

            <div class="clearfix">
              <button type="button" class="cancelbtn">Cancel</button>
              <button type="submit" class="signupbtn">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
          
  )
}
export default SignUp ;