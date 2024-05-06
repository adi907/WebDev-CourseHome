const api_create='https://prod-188.westus.logic.azure.com:443/workflows/26fb249d60694da5aa49fc1441cb8d3d/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=mWLwv26GfkOKfj3d0dhBZaQxtIYyxJP1TarHxL862tA'

async function dataSubmit(){
    showLoadingOverlay();


    let fname= document.getElementById('first-name').value;
    let lname= document.getElementById('last-name').value;
    let contactNo = document.getElementById('contactNo').value;
    let dob = document.getElementById('dob').value;

    const radioGender=document.querySelectorAll('input[name="gender"]');
    const radioDisability=document.querySelectorAll('input[name="disability"]');
    const radioPercentage=document.querySelectorAll('input[name="percentage"]');

    let gender=findGender(radioGender);
    let disability=findDisability(radioDisability);
    let percentage=findPercentage(radioPercentage);
    

    let details={
        fname:fname,
        lname:lname,
        contactNo:contactNo,
        dob:dob,
        gender:gender,
        disability:disability,
        percentage:parseInt(percentage)
    }

    let a=validateName(fname,lname);
    let b=validateDate(dob);
    let c=validatePhone(contactNo);

    if(a && b && c){

        var myHeaders=new Headers();
        myHeaders.append("Content-Type","application/json");

        var record=JSON.stringify(details);


        const options={
            method:'POST',
            headers:myHeaders,
            body:record,
            redirect:'follow'
        }

        try{
            const response=await fetch(api_create,options);
            let studentData= await response.json();
            console.log(studentData);

            hideLoadingOverlay();

            if(studentData.status===200){
                details.result=studentData.result;
                const queryString = Object.keys(details).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(details[key])}`).join('&');
                window.location.href = `/result.html?${queryString}`;

            }else{
                throw new error("Sorry, can not process the Student data. Please try again 🙏🏼")
            }

        }catch(error){
            document.getElementById('errorData').innerHTML=`${error}`;
        }

    }
hideLoadingOverlay();
}


// Loading screen
function showLoadingOverlay() {
    let loadingOverlay = document.getElementById("loading-overlay");
    loadingOverlay.style.display = "block";
}

function hideLoadingOverlay() {
    let loadingOverlay = document.getElementById("loading-overlay");
    loadingOverlay.style.display = "none";
}


// Radio Input Handlers
function findGender(radioGender){
    let gender;

    for(let opt of radioGender){
        if(opt.checked){
            gender=opt.value;
            break;
        }
    }
return gender;
}
function findDisability(radioDisability){
    let disability;

    for(let opt of radioDisability){
        if(opt.checked){
            disability=opt.value;
            break;
        }
    }
return disability;
}
function findPercentage(radioPercentage){
let percentage;
    for(let opt of radioPercentage){
        if(opt.checked){
            percentage=opt.value;
            break;
        }
    }
return percentage;
}

// Validation functions
function validateName(fname,lname){
    let flag=0;

    var expr = /^[a-zA-Z]+$/;

    if (!expr.test(fname)) {
      document.getElementById('fnError').innerHTML = "Invalid First Name";
      flag+=1;
    }
    if (!expr.test(lname)) {
      document.getElementById('lnError').innerHTML = "Invalid Last Name";
      flag+=2;
    }

    if(!flag){
        document.getElementById('fnError').innerHTML = "";
        document.getElementById('lnError').innerHTML = "";
        return true;
    }

    if(flag===1){
        document.getElementById('lnError').innerHTML = "";

    }
    if(flag===2){
        document.getElementById('fnError').innerHTML = "";

    }
    

return false;
}

function validateDate(date){

    if (!date) {
        document.getElementById('dtError').innerHTML = "Please enter a date.";
        return false;
      }
    
      const inputDate = new Date(date);
      const currentDate = new Date();
    
      if (inputDate > currentDate) {
        document.getElementById('dtError').innerHTML = "Invalid Date of Birth";
        return false;
      }
    
      document.getElementById('dtError').innerHTML = "";
return true;
}

function validatePhone(contactNo){
    var expr = /^(0|91)?[6-9][0-9]{9}$/;
    if (!expr.test(contactNo)) {
        document.getElementById('phnError').innerHTML = "Invalid Mobile Number.";
        return false;
    }

    document.getElementById('phnError').innerHTML = "";
return true;
}
