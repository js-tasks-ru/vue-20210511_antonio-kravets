export function getCalendarDateGrid(month) {
  const calendarGrid = [];
  const dt = new Date();

  const year = dt.getFullYear();
  const days = new Date(year, month + 1, 0).getDate();
  const firstWeekDay = new Date(year, month).getDay();

  let j = 0;
  let d = 1;
  let n = 1;
  for (let i = 1; i < 36; i++) {
    if (i < firstWeekDay) {
      let date = new Date(year, month, -j);
      calendarGrid.push({
        'month': month - 1,
        'day': date.getDate(),
        'weekDay': date.getDay(),
        'date': date.getTime(),
      });
      calendarGrid.sort(function (a, b) {
        return a.day - b.day;
      });
      j++;
    } else {
      if (n <= days) {
        let date = new Date(year, month, n);
        calendarGrid.push({
          'month': month,
          'day': n,
          'weekDay': date.getDay(),
          'date': date.getTime(),
        })
        n++;
      }
      if (i > (days + j)) {
        let date = new Date(year, month + 1, d);
        calendarGrid.push({
          'month': month + 1,
          'day': date.getDate(),
          'weekDay': date.getDay(),
          'date': date.getTime(),
        })
        d++;
      }
    }
  }

  if (j === 7) {
    calendarGrid.splice(0, 7);
  }
  if (d === 8) {
    calendarGrid.length = days;
  }
  return calendarGrid;
}
