 namespace CXM{
    export namespace SDA{
        export class Person {
            constructor(private fn:string, private ln:string){

            }
            get firstName():string{
                return this.fn;
            }
            get lastName():string{
                return this.ln;
            }
        }
    }
}
 namespace Guardian {
        export let name = 'Shardul';
}

namespace XX {
    export let surname = 'Ghanti';
}

let som = {fn:'Lance'};
let Emp = {empId:32,title:'Manager'};
let label = 'First Name';
let add = (a:number, b:number, c:number):number => {
    return a + b + c;
};
export {Guardian, label, add};
export {XX};
export {CXM};
export default [som, Emp,label, XX, add];