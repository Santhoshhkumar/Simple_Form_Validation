function formvalidation(){
    var firstname=document.admission.firstname;
    var lastname=document.admission.lastname;
    var fathername=document.admission.fathername;
    var mothername=document.admission.mothername;
    var emailid=document.admission.emailid;
    var aadharnum=document.admission.aadharnum;
    var phoneno=document.admission.phoneno;
    var mgender=document.admission.mgender;
    var fgender=document.admission.fgender;
    var language=document.admission.language;

    if (firstname_validation(firstname,5,12)){
        if (lastname_validation(lastname,5,12)){
            if (fathername_validation(fathername,5,12)){
                if (mothername_validation(mothername,5,12)){
                    if(ValidateEmail(emailid)){
                        if(allnumeric(phoneno)){
                            if(allnumeric(aadharnum)){
                                if(validgender(mgender,fgender)){
                                    if(languageselect(language)){

                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}
function firstname_validation(firstname,x,y){
    var firstname_len=firstname.value.length;
    if(firstname_len==0 || firstname_len>=y || firstname_len<x){
        alert("Firstname should not be empty/length in between" +x +"to" +y);
        firstname.focus();
        return false;
    }
    return true;
}
function fathername_validation(fathername,x,y){
    var fathername_len=fathername.value.length;
    if(fathername_len==0 || fathername_len>=y || fathername_len<x){
        alert("Fathername should not be empty/length in between" +x +"to" +y);
        fathername.focus();
        return false;
    }
    return true;
}
function ValidateEmail(emailid){
    var emailid_format=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w[2.3])+$/;
    if(emailid.value.match(emailid_format)){
        return true;
    }
    else{
        alert("You have entered an invalid email adders");
        emailid.focus();
        return false;
    }
}
function validgender(mgender,fgender){
    x=0;
    if(mgender.checked){
        x++;
    }
    if(fgender.checked){
        x++;
    }
    if(x==2){
        alert('Both Male/Female are checked');
        fgender.checked=false
        mgender.checked=false
        mgender.focus();
        return false;
    }
    else{
        alert('Form Submitted Successfully,We will reach out');
        window.location.reload();
        return true;
    }
}