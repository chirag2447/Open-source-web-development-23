var person1={
    id:"1",
    fname:"pooja",
    lname:"patel",
    fullName:function()
    {
        return this.fname+" "+this.lname;
    }
};

var p1=Object.create(person1);
console.log(p1.fullName());