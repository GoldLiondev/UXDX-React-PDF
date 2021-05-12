const months = [
  "JAN",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export const startAndEndDate = (start, end) => {
  if (!start || !end) return null;
  const startDate = start.split("-");
  const endDate = end.split("-");

  // get start day
  const startDay = parseInt(startDate[2]);
  const startMonth = parseInt(startDate[1]);

  // get end day
  const endDay = parseInt(endDate[2]);
  const endMonth = parseInt(endDate[1]);
  const endYear = endDate[0];

  const sameDay = startDay === endDay;
  const sameMonth = startMonth === endMonth;

  let formattedString = startDay + " ";
  if (!sameMonth) formattedString += months[startMonth - 1] + " ";
  if (!sameDay) formattedString += "- " + endDay + " ";
  formattedString += months[endMonth - 1] + " " + endYear;

  return formattedString;
};
