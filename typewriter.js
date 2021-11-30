const sentence = "hello there from lighthouse labs";

let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay); // <= 1s delay to make it noticeable. Can dial it down later.
  delay += 50; // increment timeout delay by 50 ms
}

setTimeout(() => {
  process.stdout.write('\n');
}, sentence.length * 50);
