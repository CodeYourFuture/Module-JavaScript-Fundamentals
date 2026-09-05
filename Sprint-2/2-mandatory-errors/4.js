const twelveHourClockTime = "8:53pm";
const twentyFourHourClockTime = "20:53";

// 12 Hour clock time is a string that represents the time in 12-hour format, while 24hourClockTime is a string that represents the time in 24-hour format.
// To convert 12HourClockTime to 24-hour format, we can use the following steps:
// 1. Split the string into hours and minutes using the split() method.
// 2. Check if the time is in the "pm" period. If it is, add 12 to the hours (unless it's 12pm).
// 3. If the time is in the "am" period and the hour is 12, set the hour to 0.
// 4. Format the hours and minutes into a string in 24-hour format.
