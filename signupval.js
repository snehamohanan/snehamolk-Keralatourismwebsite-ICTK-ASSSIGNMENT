let name= document.getElementById("name");
let mailid= document.getElementById("mailid");
let pswd= document.getElementById("pswd");
let pswd2= document.getElementById("pswd2");
let phone= document.getElementById("phone");

function val(){
    if(mailid.value.trim()=="")
    {
        alert("Email can not be empty");
        return false;
        
    }
     else if(name.value.trim()=="")
    {
        alert("Name can not be empty");
        return false;
        
    }

    else if(pswd.value.trim()==""){
        alert("Password can not be empty");
        return false;
        }
    else if (pswd.value.length<=3)
    {
        alert("Poor Password");
        pswd.style.border=" 2px solid red";
        return false;
    }
    else if (pswd.value.length==8)
    {
        
        pswd.style.border=" 2px  solid yellow";
        return false;
    }
    
    else if (pswd.value.search(/[A-Z]/)<=-1)
    {
        alert("Password must contain atleast 1 uppercase letter");
      return  false;
    }
    else if (pswd.value.search(/[a-z]/)<=-1)
    {
        alert("Password must contain atleast 1 lowercase letter");
      return  false;
    }
    else if (pswd.value.search(/[0-9]/)<=-1)
    {
        alert("Password must contain atleast 1 digit");
      return  false;
    }
    else if (pswd.value.length>=8)
    {
        pswd.style.border=" 2px solid green";
        return false;
    }
    if(pswd2.value==""){
        alert("This field  can not be blank");
        return false;
      }
      else if(pswd.value!=pswd2.value){
        alert("Password does not match");
        return false;
      }
      

    else if(phone.value.trim()=="")
    {
        alert("Phone Number can not be blank"); 
        return false;
    }
     
       else if(isNaN(phone.value)){
          alert("Only digits are allowed"); 
          return false;
        }
        else if (phone.value.length!=10){
          alert("Must include 10 digits"); 
          return false;
        }
       // else if(phone.value!=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
        //{
        //    alert("invalid format");
        //    return false;
        //}
        else{
            return true;
        }
    
}