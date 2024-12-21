import { Schema } from "mongoose"
import { TStudent } from "./student.interface"

const StudentSchema = new  Schema<TStudent>({
    name : {
        firstName : {
            type : String, 
            required : [true, 'firstName required']
        }, 
        middleName : {
            type : String
        }, 
        lastName : {
            type : String, 
            required : [true, 'lastName Must Be Required']
        }
    }
})