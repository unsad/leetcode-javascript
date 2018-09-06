/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  let res = [];
  let n = intervals.length;
  let cur = 0;
  while (cur < n && intervals[cur].end < newInterval.start) {
    res.push(intervals[cur++]);
  }
  while (cur < n && intervals[cur].start <= newInterval.end) {
    newInterval.start = Math.min(newInterval.start, intervals[cur].start);
    newInterval.end = Math.max(newInterval.end, intervals[cur].end);
    cur++;
  }
  res.push(newInterval);
  while (cur < n) {
    res.push(intervals[cur++]);
  }
  return res;
};

/**
 * 这题思路比较常规，用一个指针遍历数组，对每种间隔分情况讨论即可，非重叠元素直接推入res，重叠元素算好新间隔再推入res，
 * 最后把剩下的原数组非重叠部分推入res返回
 */