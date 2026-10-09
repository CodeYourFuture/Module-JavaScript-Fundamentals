

import {formatAs12HourClock} from "./Sprint-3\5-stretch-extend\format-time.js";

import {formatAs12HourClock} from "./Sprint-3\5-stretch-extend\format-time.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function(){
    assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});




const hours = require("fast-check");
console.log(hours);