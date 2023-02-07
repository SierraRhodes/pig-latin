//Business Logic

function vowelCounter(vowel) {
if (vowel === "a") {
  return 1;
 }
}

function vowelCounter(text) {
  const vowelList = "aeiou";
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
console.log(vowelCounter("A"));

function vowelCounter(text) {
  const vowelList = "aeiouAEIOU";
  let vowelCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (text.indexOf(vowelList[i]) !== -1)
    {
      vowelCount +=1;
    }
  }
  return vowelCount;
}
console.log(vowelCounter("cat"));

function vowelCounter(text) {
  const vowelList = "aeiouAEIOU";
  let vowelCount = 0;
  for (let i = 0; i < text.length; i++) {
   
    if (vowelList.indexOf(text[i]) !== -1)
    {
      vowelCount +=1;
    }
  }
  return vowelCount;
}
console.log(vowelCounter("cats catered the event"));

function vowelCounter(text) {
  const vowelList = "aeiouAEIOU";
  let vowelCount = 0;
  for (let i = 0; i < text.length; i++) {
   
    if (vowelList.indexOf(text[i]) !== -1)
    {
      vowelCount +=1;
    }
  }
  return vowelCount;
}
console.log(vowelCounter("cats catered the event"));

// Pig Latin 

function pigLatin(str) {
let vowels = ["a"];
let newStr = "";

if (vowels.indexOf(str[0]) > -1) {
  newStr = str + "way";
  return newStr;
 } else {
  return str;
 }
}
console.log(pigLatin("away"));


//UI Logic 

