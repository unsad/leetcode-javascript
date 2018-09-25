/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  let count = 0;
  let map = tickets.reduce((map, item) => {
      if (map.get(item[0])) {
          let val = map.get(item[0]);
          val.push({to: item[1], visited: false});
          map.set(item[0], val);
      } else {
          map.set(item[0], [{to: item[1], visited: false}]);
      }
      return map;
  }, new Map());
  for (let item of map) {
      map.set(item[0], item[1].sort((a, b) => {
          let i = 0;
          while (a.to.charCodeAt(i) - b.to.charCodeAt(i) === 0) {
              i++;
          }
          return a.to.charCodeAt(i) - b.to.charCodeAt(i);
      }));
  }

  return (function dfs(from, path) {
      if (count === tickets.length) return path;
      let cur = map.get(from);
      if (!cur) return false;
      let res;
      for (let i = 0; i < cur.length; i++) {
          if (cur[i].visited) continue;
          cur[i].visited = true;
          count++;
          path.push(cur[i].to);
          res = dfs(cur[i].to, path);
          if (res) return res;
          cur[i].visited = false;
          count--;
          path.pop();
      }
      return false;
  })('JFK', ['JFK']);
};

/**
 * 要头尾相连重组数组，思路不复杂就是繁琐，第一步做起点到终点的映射，并用一个visited变量记录是否
 * 到达过，当起点有多个终点时用数组记录并排序。
 * 第二步从起点开始深度遍历找终点并记录到path数组，遍历到的元素也更改visited变量为true,同时用count
 * 记录遍历数量，当count等于原数组长度时则完成重组。
 */