let patients =[];
let doctors =[];

function addpatient(id,name,age,disease){
    const patient ={
        id : id,
        name : name,
        age :age,
        disease:disease
    };
    patients.push(patient);
}

function add_doctor(doctor_id , name, specialist){
   const doctor ={
    doctor_id : doctor_id,
    name : name,
    specialist : specialist
   };
   doctors.push(doctor);
}

function search(id , doctor_id){
    const patient = patients.find(x => x.id == id);
    const doctor = doctors.find(x =>x.doctor_id == doctor_id);

    if(patient){
        console.log("find");
    }else{
        console.log("not find");
    }

    if(doctor){
        console.log("finded");
    }
    else{
        console.log("not finded");
    }
}

addpatient(1 , "aham" , 18 , "Typhoid");
addpatient(2 , "Sheetal" , 18 , "TB");
addpatient(3 , "Manish" , 18 , "Rabies");

add_doctor(1 , "shyam" , "Surgian");


search(1);
search(2);

console.log(patients);