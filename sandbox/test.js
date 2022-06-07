const shellSearch = require("../index")

let main = async ()=>{

    /*
    await shellSearch("COMMAND TO EXECUTE","TEXT TO SEARCH FOR","RETURN LINE TEXT WAS FOUND (true or false)","KILL PROCESS ONCE FOUND")
     */
    let response = await shellSearch("ping google.com","Reply",true,true)
    console.log(response)

}
main()