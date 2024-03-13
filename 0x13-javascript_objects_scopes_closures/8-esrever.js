#!/usr/bin/node

exports.esrever = function (list) {
  const n = list.length;
  const reversedList = [];

  for (let i = 0; i < n; i++) {
    reversedList.push(list[n - 1 - i]);
  }
  return reversedList;
};
