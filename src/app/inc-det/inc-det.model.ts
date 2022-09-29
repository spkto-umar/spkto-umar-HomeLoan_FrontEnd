export class UserModel{
    userId : number=0;
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


export class IncDetModel{
    incomeId:number=0;
    propertyName : string = "";
    propertyLocation : string = "";
    amount : number = 0;
    retirementAge : string = "";
    monthlySalary : string = "";
    organization : string = "";
    customer !: UserModel;
}
