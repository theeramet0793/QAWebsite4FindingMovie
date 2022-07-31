
import axios from "axios";

const resetAlert = async (event) => {
    var loginfailAlert = await document.getElementById("login-fail-alert")
     loginfailAlert.style.display = "none";
     var noEmailfailAlert = await document.getElementById("login-noEmail-alert")
     noEmailfailAlert.style.display = "none";
     var noPasswordfailAlert = await document.getElementById("login-noPassword-alert")
     noPasswordfailAlert.style.display = "none";
}

const LogInFailAlert = async (event) => {
    var failAlert = await document.getElementById("login-fail-alert")
     failAlert.style.display = "block";
}

const LogInNoEmailAlert = async (event) => {
    var failAlert = await document.getElementById("login-noEmail-alert")
     failAlert.style.display = "block";
}

const LogInNoPasswordAlert = async (event) => {
    var failAlert = await document.getElementById("login-noPassword-alert")
     failAlert.style.display = "block";
}

const handleKeyPress = async (event) =>{
        if(event.key === 'Enter'){
        clickLogin()
      }
}

const clickLogin = async () => {

    resetAlert();

    const emailValue = await document.getElementById("email").value;
    const passwordValue = await document.getElementById("password").value;

    if( emailValue == "" ){
        LogInNoEmailAlert();
        return;
    }

    if( passwordValue == "" ){
        LogInNoPasswordAlert();
        return;
    }

    axios.post('http://127.0.0.1:5000/SignIn ',
    {
        email: emailValue, 
        password: passwordValue,
    } )
    .then((response) => 
    {
        console.log(response)
        console.log(typeof(emailValue))
        if( response.data === 'failed'){
            LogInFailAlert();
        }else{
            localStorage.setItem('UID',response.data['UID']);
            localStorage.setItem('UName',response.data['UName']);
            localStorage.setItem('URole',response.data['URole']);
            localStorage.setItem('accessToken',response.data['token']);
            window.location = "/posts";     
        }   
    }
    );

}

const SignIn = () =>{
    return (
        <div className="sign-page">
            <div className="container-login">

                <form className="login-form">
                    <div class="imgcontainer">
                        <img class="avatar-login" src="/images/signIn_icon.png" alt="Avatar" ></img>
                    </div>

                    <div class="container-input-login">
                        <div className="login-email">
                            <div className="input-email">
                                <input className="form-input-email" id ="email" type="text" placeholder=" Email" name="email" required onKeyPress={handleKeyPress}></input>
                            </div>
                        </div>
                        
                        <div className="login-password">
                            <div className="input-password">
                                <input className="form-input-password" id="password" type="password" placeholder=" Password" name="psw-login" required onKeyPress={handleKeyPress}></input>
                            </div>
                        </div>

                        <div className="container-forgot-password">
                            <a href="#" id="forgot-password">Forgot your password?</a>
                        </div>

                            
                    </div>

                    <div className="container-button" >
                        <div className="container-login-button"><button type="button" className="btn-submit-login" onClick={clickLogin} >Login</button></div>
                    </div>
                    <div><a id="login-fail-alert">Email or password incorrect</a></div>
                    <div><a id="login-noEmail-alert">Please fill in your email</a></div>
                    <div><a id="login-noPassword-alert">Please fill in your password</a></div>
                    <div><hr></hr></div>
                    <div>
                        <a href="/signUp" id="create-account">Create an account?</a>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default SignIn;