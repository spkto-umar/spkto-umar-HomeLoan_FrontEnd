export class UserModel{
    firstName : string = "";
    lastName : string = "";
    middleName : string = "";
    email : string = "";
    password : string = "";
    phone : number = 0
    dob : string = "";
    gender : string = "";
    nationality : string = "";
    aadharNo : number = 0;
    panNo : string = "";
}


export class LoaDetModel{
    applicationId : number = 0;
    loanAmount : string = "";
    tenure : string = "";
    interest : number = 0;
    status : string = "";
    customer !: UserModel;
}
