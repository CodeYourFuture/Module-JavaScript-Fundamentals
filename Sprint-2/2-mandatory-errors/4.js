const twelveHourClockTime = "8:53pm";
const twentyFourHourClockTime = "20:53";

// The error occurs because JavaScript variable names cannot start with a number.
// Both variable names begin with digits, so JavaScript cannot parse them as valid identifiers
// and throws a SyntaxError.
// Renaming the variables so they start with letters fixes the error.