const queryString=window.location.search;
const urlParams=new URLSearchParams(queryString);

const studentData={
    fname:urlParams.get('fname'),
    lname:urlParams.get('lname'),
    dob:urlParams.get('dob'),
    gender:urlParams.get('gender'),
    disability:urlParams.get('disability'),
    percentage:urlParams.get('percentage'),
    contactNum:urlParams.get('contactNo'),
    college:urlParams.get('result')

}

document.getElementById('clgName').innerHTML=`Congratulations, your future begins at ${studentData.college}!`


let tab=`<tr>
        <th>First Name</th>
        <td>${studentData.fname}</td>
        </tr>`;

        tab+=`<tr>
        <th>Last Name</th>
        <td>${studentData.lname}</td>
        </tr>`;

        tab+=`<tr>
        <th>Gender</th>
        <td>${studentData.gender}</td>
        </tr>`;

        tab+=`<tr>
        <th>Date of Birth</th>
        <td>${studentData.dob}</td>
        </tr>`;

        tab+=`<tr>
        <th>Disability Status</th>
        <td>${studentData.disability}</td>
        </tr>`;
        tab+=`<tr>
        <th>Contact No.</th>
        <td>${studentData.contactNum}</td>
        </tr>`;


        tab+=`<tr>
        <th>College Allotted</th>
        <td>${studentData.college}</td>
        </tr>`;
    
    
document.getElementById('resultTable').innerHTML=tab;