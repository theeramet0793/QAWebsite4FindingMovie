
import axios from "axios";

function IsSamePassword(password, repeatPassword){
  if(password === repeatPassword){
    return true;
  }else{
    return false;
  }
}
const clickCancel = () =>{ window.location = "/signIn"}

const btnClick = () =>{
  const userNameValue = document.getElementById("signUp-username-id").value;
  const emailValue = document.getElementById("signUp-email-id").value;
  const passwordValue = document.getElementById("signUp-password-id").value;
  const repeatPasswordValue = document.getElementById("signUp-repeatpassword-id").value;
  var date = new Date();

  if( IsSamePassword(passwordValue, repeatPasswordValue) ){
    axios
    .post('http://127.0.0.1:5000/SignUp ',
    {userName: userNameValue, 
     email: emailValue,
     password: passwordValue,
     createdAt: date.toDateString()+"  "+String(date.getHours())+":"+String(date.getMinutes())+":"+String(date.getSeconds()),
     imageURL: "No URL",
    } )
    .then( (response) => {
        if(response.status == 200){
           window.alert("Sign Up success")
        }else{
          window.alert("Sign Up Failed")
        }
    });
  }else{
    window.alert("Password != RepeatPassword");
  }
}

const SignUp = () =>{
  return (
    <div className="signup-page">
      <div className="signup-modal">
        <form className="form-signup">
          <div class="container">
            <div className="signup-title">Create an account</div>

            <hr></hr>

              <div className = "container1">
                <input className= "signUp-username" id="signUp-username-id" type="text" placeholder="Enter Username" name="username" required ></input>
              </div>

              <div className = "container2">
                <input className= "signUp-email" id="signUp-email-id" type="text" placeholder="Enter Email" name="email" required ></input>
              </div>
            
              <div className = "container3">
                <input className= "signUp-password" id="signUp-password-id" type="password" placeholder="Enter Password" name="psw" required ></input>
              </div>
          
              <div className="container4">
                <input className= "signUp-repeatPassword" id="signUp-repeatpassword-id"type="password" placeholder="Repeat Password" name="psw-repeat" required ></input>
              </div>
            

            <div className="signup-description">By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</div>

            <div className="clearfix">
              <button type="button" className="cancelbtn" onClick={clickCancel}>Cancel</button>
              <button type="submit" className="signupbtn" onClick={btnClick}>Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>    
  )
}
export default SignUp ;