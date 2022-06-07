# shell-search-executor
Execute an async command and return data

https://github.com/nickpick42/shellsearch

## Installation

Use the package manager [npm] to install shell-search-executor.

```bash
npm install shell-search-executor
```

## Usage

```JavaScript
const shellSearch = require("../index")

let main = async ()=>{
   /*
    await shellSearch("COMMAND TO EXECUTE","TEXT TO SEARCH FOR","RETURN LINE TEXT WAS FOUND (true or false)","KILL PROCESS ONCE FOUND")
     */
    let response = await shellSearch("ping google.com","Reply",true,true)
    console.log(response)
    /*
        PID return along with text if third parameter is set to true
    
     */

}
main()
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)