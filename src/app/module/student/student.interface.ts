export type Tname = {
    firstName : string
    middleName ? : string
    lastName : string
}
export type TGuardian = {
    fatherName : string
    motherName : string
    fatherNo : string
    motherNo : string
}
export type TlocalGuardian = {
    name : string
    email ? : string 
    contact : string 
}
export type TStudent = {
    id : string
    name : Tname
    gender : "female" | "male"
    dateOfBirth : string
    email : string
    contactNo : string
    emergencyContactNo : string
    presentAddress : string
    permanentAddress : string
    guardian : TGuardian
    localGuardian : TlocalGuardian
    profileImage ? : string
 
}