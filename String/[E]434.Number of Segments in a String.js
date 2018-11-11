/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  return s.match(/\S+/g) ? s.match(/\S+/g).length : 0;
};

/**
 * 简单的正则匹配计数解决
 */