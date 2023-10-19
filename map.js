const array = [10,20,30,40]


Array.prototype.map = null

if (!Array.prototype.map) {

    Array.prototype.map =function (callBack){
        let newarray = [];

        for (let i = 0; i < this.length; i++) {
            newarray.push(callBack(this[i]));
        
        }
        return newarray;
    }
}
let a = array.map((value) => {
    return value + 1;
})

console.log(a)