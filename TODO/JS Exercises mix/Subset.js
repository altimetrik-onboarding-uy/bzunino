let number = 173;

String.prototype.sub_string = function (){
    let subsetNumber = [];

    for (let i = 0; i < this.length; i++) 
  {
    for (let o = i+1; o<this.length+1; o++) 
    {
        subsetNumber.push(this.slice(i,o));
    }
  }
  return subsetNumber;
}

console.log(`${number}`.sub_string());