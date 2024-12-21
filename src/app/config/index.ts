import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path:path.join(process.cwd(), '.env')});


export default {
    dbUrl : process.env.dbUrl, 
    db_port : process.env.db_port
}