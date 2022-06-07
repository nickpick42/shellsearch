const {exec} = require("child_process")
const S = require("string")
const terminate = require("terminate/promise")

const index = async (command, searchingText, returnText, destroyOnFound, returnPID)=>{
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
                res(returnText ? {data,pid:execute.pid} : true)

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
                res(returnText ? {data,pid:execute.pid} : true)

            }
        })
       execute.on("close",(data)=>{
           if ( !found){
               if ( S(data).contains(searchingText)){
                   res(returnText ? {data,pid:execute.pid} : true)
               }else{
                   res(false)
               }
           }
       })

    })
}
module.exports = index