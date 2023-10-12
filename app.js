const form = document.querySelector('#form');
const uname = document.querySelector('#uname');
const email = document.querySelector('#email');
const passwd = document.querySelector('#password');
const cpasswd = document.querySelector('#cpassword');

  
form.addEventListener('submit',(e)=>{
  
  if(!validateValues()){
    e.preventDefault(); 
  } 
});

function validateValues(){
  const unameVal = uname.value.trim();
  const emailVal = email.value.trim();
  const passwdVal = passwd.value.trim();
  const cpasswdVal = cpasswd.value.trim();
  let success = true;

  if(unameVal===''){
    success = false;
    setError(uname,'username is required');
  }else {
    setSuccess(uname);
  }

  if(emailVal===''){
    success = false;
    setError(email,'Email is required');
  }else if(!emailValidate(emailVal)){
    setError(email,'Enter a vaild email'); 
  }else{
    setSuccess(email); 
  }

  if(passwdVal===''){
    success = false;
    setError(passwd,'Password is required');
  }else if(passwdVal.length<8){
    setError(passwd,'Password must be 8 characters');
  }else{
    setSuccess(passwd)
  }

  if(cpasswdVal===passwdVal){
    success = false;
    setError(cpasswd,'Password does not match');
  }else{
    setSuccess(cpasswd);
  }
}

function setError(element,msg) {
  const parent = element.parentElement;
  const errorElement = parent.querySelector('#error');

  errorElement.innertext = msg;
  parent.classList.add('error');
  parent.classList.remove('success');
}

function setSuccess(element,msg) {
  const parent = element.parentElement;
  const errorElement = parent.querySelector('#error');

  errorElement.innertext = '';
  parent.classList.add('success');
  parent.classList.remove('error');
}

const emailValidate = (email) => {
  return String(email).toLocaleLowerCase.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  );
}; 