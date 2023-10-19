const array = ["javascript", "node", "react", "express"]



Array.prototype.forEach = null

if (!Array.prototype.forEach)
{
    Array.prototype.forEach = function (callback) {
        
   

    for (let i = 0; i < this.length; i++){
        callback(this[i])
    }
    }

    }

array.forEach((callback) =>
console.log(callback))