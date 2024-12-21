import mongoose from 'mongoose'
import app from './app';
import config from './app/config';

async function main(){
    await mongoose.connect(config.dbUrl as string );
    app.listen(config.db_port, () => {
        console.log(`Example app listening on port ${config.db_port}`)
      })
};

main();