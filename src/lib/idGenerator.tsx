function* generator() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
const idGen = generator();
export const generateId = () => idGen.next().value as number;
