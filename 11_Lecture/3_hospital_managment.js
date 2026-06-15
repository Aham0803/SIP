let patients =[];

function addpatient(id,name,age,disease){
    const patient ={
        id : id,
        name : name,
        age :age,
        disease:disease
    };
    patients.push(patient);
}

addpatient(1 , "aham" , 18 , "Typhoid");

console.log(patients);