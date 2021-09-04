let mailid= document.getElementById("mailid");
let pswd= document.getElementById("pswd");
function val(){
    if(mailid.value.trim()==""|| pswd.value.trim()=="")
    {
        alert("Fields can not be empty");
        return false;
        
    }
    else{
        return true;
        //alert("Feilds are recorded");
    }
}

    