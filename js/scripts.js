//Business Logic

function vowelCounter(vowel) {
if (vowel === "a") {
  return 1;
 }
}

function vowelCounter(text) {
  const vowelList = "aeiouAEIOU";
  let vowelCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (vowelList.indexOf(text[i]) !== -1)
    {
      vowelCount += 1;
    }
  }
  return vowelCount;
}
console.log(vowelCounter("cater"));

function vowelCounter(text) {
  const vowelList = "aeiouAEIOU";
  let vowelCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (vowelList.indexOf(text[i]) !== -1)
    {
      vowelCount += 1;
    }
  }
  return vowelCount;
}
console.log(vowelCounter("AEIOUaeiou"));

//UI Logic 

