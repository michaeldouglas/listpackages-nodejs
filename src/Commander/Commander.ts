import { Commands } from "./Commands";

class Commander implements Commands
{
    execCommand(type)
    {
        if(type.listpackages){
            console.log('  - %s peppers', type.listpackages);
        }
    }
}

export { Commander };