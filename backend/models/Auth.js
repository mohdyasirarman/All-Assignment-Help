const Database = require("./Database")

class Auth{
    constructor(){}
    exists(authKey){
        const db = new Database()
        db.all(`SELECT * from auth where key=${authKey}`,(err, rows)=>{
            if(err){
                console.log(err.message)
            }else{
                if(rows[0]){
                    return true
                }else{
                    return false
                }
            }
        });
        db.close()
    }
}