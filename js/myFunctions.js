var errorsNum = 0;


var fullNameErr = idErr = dateErr = mobileErr = emailErr = loanAmountErr = loanTypeErr = yearLoanErr = paymentErr = captchaErr = "error";



function enableSubmit()
{
    var submitBtn = document.getElementById('submit');

    
    if(fullNameErr == '' && idErr == '' && dateErr == '' && mobileErr == '' && emailErr == '' && loanAmountErr == '' && loanTypeErr == '' && yearLoanErr == '' && paymentErr == '' && captchaErr == '')
    {
        
        submitBtn.disabled = false;

    }
    else
    {
        submitBtn.disabled = true;
    }

}


var fullName = document.getElementById('fullName');

fullName.onchange = function(){
    
    var validName = document.getElementById('validName');

    var invalidName = document.getElementById('invalidName');


    if(fullName.value != '')
    {

        if(/^[ء-ي\s]*$/.test(fullName.value) || /^[A-Za-z\s]*$/.test(fullName.value))
        {
            validName.classList.remove('d-none');
            invalidName.classList.add('d-none');


            var fullNameVal = fullName.value;
            fullNameErr = '';

        }
        else
        {
            validName.classList.add('d-none');
            invalidName.classList.remove('d-none');

            fullNameErr = 'error';


        }

    }
    else
    {
        validName.classList.add('d-none');
        invalidName.classList.remove('d-none');

        fullNameErr = 'error';
    }

    
    enableSubmit();

};


var personalId = document.getElementById('personalId');

personalId.onchange = function(){

    var invalidId = document.getElementById('invalidId');

    var validId = document.getElementById('validId');

    if(personalId.value != '' && personalId.value.length == 11)
    {
        if((personalId.value[0] == 0 && personalId.value[1] != 0 ) || (personalId.value[0] == 1 && personalId.value[1] < 5))
        {

            validId.classList.remove('d-none');
            invalidId.classList.add('d-none');
    
    
            var idVal = personalId.value;
            idErr = '';

        }
        else
        {
            
            invalidId.classList.remove('d-none');
            validId.classList.add('d-none');

            idErr = 'error';
        }


    }
    else
    {
        invalidId.classList.remove('d-none');
        validId.classList.add('d-none');

        idErr = 'error';
    }

    
    enableSubmit();
}



var date = document.getElementById('date');

date.onchange = function(){

    var invalidDate = document.getElementById('invalidDate');

    var validDate = document.getElementById('validDate');

    if(date.value != '')
    {
        invalidDate.classList.add('d-none');
        validDate.classList.remove('d-none');

        var dateVal = date.value;
        dateErr = '';


    }
    else
    {
        validDate.classList.remove('d-none');
        invalidDate.classList.add('d-none');

        dateErr = 'error';
    }

    
    enableSubmit();
}



var mobileNum = document.getElementById('mobile');

mobileNum.onchange = function(){
    
    var invalidMobile = document.getElementById('mobileInvalid');

    var validMobile = document.getElementById('mobileValid');

    if(mobileNum.value == '')
    {

        validMobile.classList.add("d-none");
        invalidMobile.classList.remove("d-none");

        mobileErr = 'error';
    }
    else
    {
        if(mobileNum.value[0] == 0 && mobileNum.value[1] == 9)
        {

            if(mobileNum.value.length != 10 || mobileNum.value[2] == 1 || mobileNum.value[2] == 2 || mobileNum.value[2] == 7)
            {
                validMobile.classList.add('d-none');
                invalidMobile.classList.remove('d-none');

                mobileErr = "error";

            }
            else
            {
                validMobile.classList.remove('d-none');
                invalidMobile.classList.add('d-none');

                var mobileNumVal = mobileNum.value;
                mobileErr = '';

            }
        }
        else
        {
            
            validMobile.classList.add('d-none');
            invalidMobile.classList.remove('d-none');

            mobileErr = "error";

        }

    }
    
    enableSubmit();
}



var email = document.getElementById('email');

email.onchange = function(){

    var validEmail = document.getElementById('validEmail');

    var invalidEmail = document.getElementById('invalidEmail');


    if(email.value != '')
    {
        validEmail.classList.remove('d-none');
        invalidEmail.classList.add('d-none');

        var emailVal = email.value;
        emailErr = '';
    }
    else
    {
        invalidEmail.classList.remove('d-none');
        validEmail.classList.add('d-none');

        emailErr = 'error';
    }

    
    enableSubmit();

}





var loanAmount = document.getElementById('loanAmount');

loanAmount.onchange = function(){

    var loanValid = document.getElementById('loanValid');

    var loanInvlid = document.getElementById('loanInvalid');

    if(loanAmount.value != '')
    {
        if(loanAmount.value < 1000000 || loanAmount.value > 10000000)
        {
            loanInvlid.classList.remove('d-none');
            loanValid.classList.add('d-none');
        }
        else
        {
            loanValid.classList.remove('d-none');
            loanInvlid.classList.add('d-none');

            var loanAmountVal = loanAmount.value;
            loanAmountErr = '';
        }
    }
    else
    {
        loanInvlid.classList.remove('d-none');
        loanValid.classList.add('d-none');

        loanAmountErr = "error";
    }

    
    enableSubmit();

}


var loanTypeDropDown = document.getElementById('loanType');


loanTypeDropDown.onchange = function(){

    var loanType = loanTypeDropDown.options[loanTypeDropDown.selectedIndex].value;
    
    var validLoanType = document.getElementById('validLoanType');

    var invalidLoanType = document.getElementById('invalidLoanType');


    if(loanType != '')
    {
        validLoanType.classList.remove('d-none');
        invalidLoanType.classList.add('d-none');

        var loanTypeVal = loanType;
        loanTypeErr = '';
        
    }
    else
    {
        invalidLoanType.classList.remove('d-none');
        validLoanType.classList.add('d-none');

        loanTypeErr = 'error';
    }

    
    enableSubmit();
}



var loanYearsDropdown = document.getElementById('loanYears');

loanYearsDropdown.onchange = function(){

    var loanYears = loanYearsDropdown.options[loanYearsDropdown.selectedIndex].value;
    
    var validLoanYears = document.getElementById('validLoanYears');

    var invalidLoanYears = document.getElementById('invalidLoanYears');

    if(loanYears != '')
    {
        validLoanYears.classList.remove('d-none');
        invalidLoanYears.classList.add('d-none');

        var loanYearsVal = loanYears;
        yearLoanErr = '';
        
    }
    else
    {
        invalidLoanYears.classList.remove('d-none');
        validLoanYears.classList.add('d-none');

        yearLoanErr = 'error';
    }

    
    enableSubmit();
}



var paymentMethodDropDown = document.getElementById('paymentMethod');

paymentMethodDropDown.onchange = function(){

    var paymentMethod = paymentMethodDropDown.options[paymentMethodDropDown.selectedIndex].value;
    
    var validpaymentMethod = document.getElementById('validpaymentMethod');

    var invalidpaymentMethod = document.getElementById('invalidpaymentMethod');

    if(paymentMethod != '')
    {
        validpaymentMethod.classList.remove('d-none');
        invalidpaymentMethod.classList.add('d-none');

        var paymentMethodVal = paymentMethod;
        paymentErr = '';
        
    }
    else
    {
        invalidpaymentMethod.classList.remove('d-none');
        validpaymentMethod.classList.add('d-none');

        paymentErr = 'error';
    }

    
    enableSubmit();
}







var captcha = document.getElementById('checkCap');


captcha.onchange = function(){
    var captchaCode = document.getElementById('capt');

    var validCaptch = document.getElementById('validCaptcha');

    var invalidCaptch = document.getElementById('invalidCaptch');


    if(captchaCode.value != captcha.value)
    {
        invalidCaptch.classList.remove('d-none');
        validCaptch.classList.add('d-none');
        cap();

        captchaErr = 'error';
    }
    else
    {
        validCaptch.classList.remove('d-none');
        invalidCaptch.classList.add('d-none');

        captchaErr = '';
        

    }

    
    enableSubmit();

}