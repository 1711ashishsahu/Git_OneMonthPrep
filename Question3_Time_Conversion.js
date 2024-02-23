// function timeConversion(s) {
//     s.split(':');
//     let hour = parseInt(s.substring(0, 2), 10);
//     let minute = parseInt(s.substring(3, 5), 10);
//     let second = parseInt(s.substring(6, 8), 10);
//     let type = s.slice(-2);
//     if (type === 'AM' && hour === 12) {
//         hour = 0;
//     } else if (type === 'PM' && hour != 12) {
//         hour = hour + 12;
//     }
//     return (hour < 10 && hour !== '00' ? "0" + hour : hour) + ":"
//         + (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second);

// }
// let ttt = timeConversion("07:05:45PM")
// console.log(ttt);

function timeConversion(s){
    // Split the input string by ':'
    let timeArray = s.split(':');
    // console.log(timeArray);  //checking the splited part

    // Extract hour, minute, second, and type
    let hour = parseInt(timeArray[0], 10);
    let minute = parseInt(timeArray[1], 10);
    let second = parseInt(timeArray[2].substring(0, 2), 10);
    // console.log(second);
    let type = timeArray[2].substring(2);
    // console.log(type);
    // Convert to 24-hour format
    if (type === 'AM' && hour === 12) {
        hour = 0;
    }
    else if (type === 'PM' && hour !== 12) {
        hour += 12;
    }
    // console.log(hour);
    return ((hour < 10 ? "0" + hour : hour) + ":" +(minute < 10 ? "0" + minute : minute) + ":" +(second < 10 ? "0" + second : second))
}
let ttt = timeConversion("12:05:45PM")
console.log(ttt);