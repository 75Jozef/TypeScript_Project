const person: {
  name: string;
  age: number;
  siblings: {
    sisters: number;
    brothers: number;
  };
  hobbies: string [];
  role: [number, string];
} = {
  name: 'Jozef',
  age: 45,
  siblings: {
    brothers: 1,
    sisters: 1
  },
  hobbies: ['Sports','dvlpmnt'],
  role: [2, 'author']
};

console.log(person);

person.role.push('admin');
person.role[1]='kuk';

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
