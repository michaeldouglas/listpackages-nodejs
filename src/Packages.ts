import { Commander } from "./Commander/Commander";

class Packages extends Commander{
    public VERSION = "0.0.1";
    private exec;

    setCommander(exec) {
        this.exec = exec;
    }

    getCommander() {
        return this.exec;
    }
}

var Package = new Packages();
export = Package;