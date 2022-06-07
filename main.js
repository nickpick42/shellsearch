const {exec} = require("child_process")
const S = require("string")
const terminate = require("terminate/promise")

const main = async (command, searchingText, returnText, destroyOnFound)=>{
   return  new Promise( (res,rej)=>{
       let execute = exec(command)
       let found = false;
        execute.stdout.on("data",async (data)=>{
            if ( S(data).contains(searchingText)){
                found = true
                if ( destroyOnFound){
                    try{
                        await terminate(execute.pid)
                    }catch (e){

                    }
                }
                res(returnText ? data : true)

            }
        })
        execute.stderr.on("data",async (data)=>{
            if ( S(data).contains(searchingText)){
                found  = true
                if ( destroyOnFound){
                    try{
                        await terminate(execute.pid)
                    }catch (e){

                    }
                }
                res(returnText ? data : true)

            }
        })
       execute.on("close",(data)=>{
           if ( !found){
               if ( S(data).contains(searchingText)){
                   res(returnText ? data : true)
               }else{
                   res(false)
               }
           }
       })

    })
}
module.exports = main