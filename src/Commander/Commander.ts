import { StringValidator } from "./Validation";

class Commander implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5;
    }
}
export { Commander };