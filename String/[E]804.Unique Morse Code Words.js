/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const code =[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  let set = new Set();
  for (let i = 0; i < words.length; i++) {
    let w = words[i].split("").map(item => code[item.charCodeAt(0) - 0x61]).join("");
    if (!set.has(w)) {
      set.add(w);
    }
  }
  return set.size;
};

/**
 * 摩尔斯电码设置为数组映射后对每个单词转码，用set的不重复特性记录次数
 */