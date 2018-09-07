/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  let res = [];
  let cur = 0;
  let n = intervals.length - 1;
  intervals.sort((a, b) => a.start - b.start);
  while (cur <= n) {
    if (cur === n || intervals[cur + 1].start > intervals[cur].end) {
      res.push(intervals[cur++]);
    } else {
      intervals[cur + 1].start = Math.min(intervals[cur].start, intervals[cur + 1].start);
      intervals[cur + 1].end = Math.max(intervals[cur].end, intervals[cur + 1].end);
      cur++;
    }
  }
  return res;
};

/**
 * 和57题类似，分两种情况，一种无重叠，直接推入res，一种有重叠，则合并后继续后续循环。
 */