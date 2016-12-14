import { Commander } from "./Commander/Commander";

var program = require('commander');

class Packages extends Commander{
    public VERSION = "0.0.1";
    private program;

    constructor(program){
        this.program = program;

    }

    public setProcess(process)
    {
        this.setOptions(process);
    }

    private setOptions(process)
    {
        this.program.version(this.VERSION).option('-l, --listpackages', 'Lista os pacotes NodeJSInstalados').parse(process);
    }

    public getCommander() {
        return this.program;
    }

    public execute(type) {
        this.execCommand(this.program);
    }
}

var Package = new Packages(program);
export = Package;