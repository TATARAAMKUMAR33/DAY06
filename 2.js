
//3.Write a “person” class to hold all the details.

class person{
    constructor (FirstName,Age,MobileNo,Quallification,Email)
    {
      this.FirstName=FirstName;
      this.Age=Age;
      this.MobileNo=MobileNo;
      this.Quallification=Quallification;
      this.Email=Email;
    }
      }
      var details=new person("RAAM",27,12345678,"M.SC","RAAMKUMAR@Gmail.com"); 
      console.log(details) ;

      //output: person { FirstName: 'RAAM',
      // Age: 27,
      // MobileNo: 12345678,
      // Quallification: 'M.SC',
      // Email: 'RAAMKUMAR@Gmail.com' }