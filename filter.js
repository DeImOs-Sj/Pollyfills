const array = [2, 4, 6, 8]

Array.prototype.filter = null;

if (!Array.prototype.filter) {
    
    let a = [];
    Array.prototype.filter = function (callBack)
    {
        for (let i = 0; i < this.length; i++)
        {
            if (callBack(this[i]))
            {
                a.push(this[i])
                }
            
            }
        return a;
        }


}



let newarr = array.filter((value) => {
    return value > 2;
})
console.log(newarr)