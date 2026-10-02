const twelveHourClockTime = "8:53pm";
const twentyFourHourClockTime = "20:53";

// Error: SyntaxError: Invalid or unexpected token
// Cause: I originally named the variables 12HourClockTime and 24hourClockTime,
//        but JavaScript doesn't allow variable names to start with a number.
//        They have to start with a letter, an underscore, or a dollar sign.
//        The parser was reading 12 as a number and then got stuck on the "H".
// Fix: Renamed them to twelveHourClockTime and twentyFourHourClockTime so they
//      start with letters instead of digits.