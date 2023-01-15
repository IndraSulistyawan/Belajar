// class User {
//     constructor(firstName, lastName) {
//      this.firstName = firstName;
//      this.lastName = lastName;
//    }
   
//     get fullName() {
//       return `${this.firstName} ${this.lastName}`;
//     }
   
//     set fullName(fullName) {
//       const [firstName, lastName] = fullName.split(' ');
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }
//   }
   
//   const user = new User('John', 'Doe');
//   console.log(user);
//   console.log(user.fullName);
   
//   user.fullName = 'Fulan Fulanah';
//   console.log(user);
//   console.log(user.fullName);
   
//   /* Output:
//   User { firstName: 'John', lastName: 'Doe' }
//   John Doe
//   User { firstName: 'Fulan', lastName: 'Fulanah' }
//   Fulan Fulanah
//   */
class User{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(fullName){
        const [firstName, lastName] = fullName.split(' ')
        this.firstName = firstName
        this.lastName = lastName
    }
}

const user = new User('Made', 'Indra');
  console.log(user);
  console.log(user.fullName);

  user.fullName = 'Fulan Fulanah';
  console.log(user);
  console.log(user.fullName);