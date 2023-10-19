const array = [1, 2, 3, 4]





Array.prototype.reduce = null


if (!Array.prototype.reduce) {
    
    Array.prototype.reduce = function (callback, ival) {
        let pval = ival;
        for (let i = 0; i < this.length; i++)
        {
            
            pval=callback(pval,this[i],i,this)
        }
        return pval;

    }
}


console.log(array.reduce((a, b) => {
    return a + b;
   
},1))