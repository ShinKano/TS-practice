console.log('Hello TypeScript!');

const a = 27;
const b = 35;

const output = (a: number, b: number) => {
  console.log(`2人の年の差は：${b - a}才です。`)
}

output(a, b);
