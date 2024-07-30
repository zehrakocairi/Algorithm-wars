
interface User{
    name: string;
    age: number;
    getFullName(): string;
}
class User1{
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getFullName(): string{
        return this.name + " " + "NoLastName";
    }
}

const user:User = new User1("Daniel", 30);

  const fullName = user.getFullName();
   
  user.name = "Daniel";

  function greet(person:string, date:string): string {
    console.log(`Hello ${person}, today is ${date}!`);
    return "12";
  }

  const res:string = greet("12","12");