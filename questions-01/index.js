// Arrays

// sr Q6

function check(...args) {
  const [el, arr] = args;
  if (!el || !arr) {
    console.log("expected tow agrumets but provided only one");
    throw new Error("expected tow agrumets but provided only one");
  }
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === el) {
      console.log(`el exist ar index ${i}`);
      return i;
    }
  }
  console.log("element dosnt exist ");
  return "element donts exist";
}
check(2, [1, 2, 3, 4, 5]);

//srn Q 10

function swapfirsandlast(arr) {
  if (!arr) return;
  const firstel = arr[0];
  arr.splice(0, 1, arr[arr.length - 1]);
  arr.splice(arr.length - 1, 1, firstel);
  console.log(arr);
}

swapfirsandlast([1, 2, 3, 4]);
