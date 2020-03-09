
/*let rollOfDice = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]; 
I did not need a second Array
let D1 = Math.ceil(Math.random() * 6);
let D2 = Math.ceil(Math.random() * 6); 
D1 & D2 need to be their own statements first
before set = to a  static variable
make a array to hold 2-12 (1-6 * 2)
index [0-10] counting #'s (1-11)... 
I also did not need Array.Push in this Assessment
Used Object Method for the Bar Graph
*/


    
let numCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 1000; i++) {

    let D1 = Math.floor(Math.random() * 6);
    let D2 = Math.floor(Math.random() * 6);

    rollOfDice = D1 + D2;
    numCount[rollOfDice] = numCount[rollOfDice] + 1;
}
    
    
let data = {
    header: ["Die Roll", "Number Count"],
    rows: [
        ["2", numCount[0]],
        ["3", numCount[1]],
        ["4", numCount[2]],
        ["5", numCount[3]],
        ["6", numCount[4]],
        ["7", numCount[5]],
        ["8", numCount[6]],
        ["9", numCount[7]],
        ["10", numCount[8]],
        ["11", numCount[9]],
        ["12", numCount[10]]
    ]}

//create chart
let chart = anychart.column();

//add data
chart.data(data);

//set chart title
chart.title("Rolling Dice");

//draw
chart.container("container");
chart.draw();















