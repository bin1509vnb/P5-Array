function setup() {
    createCanvas(1000, 1000);
  }
// Array loop Tutorial
  //https://www.youtube.com/watch?v=RXWO3mFuW-I&t=305s&ab_channel=TheCodingTrain
  var numbers = [100, 200, 300 , 400, 500];
  
  function draw(){
    background(150, 75, 0);

      for (var i = 0; i < 5; i++ ) {
          stroke(52);
          fill(0);
          ellipse(i*100+100, 350, numbers[i], numbers[i]);
      }
  }
  //Array push Tutorial
  //https://www.youtube.com/watch?v=g1hlKlovok8&ab_channel=FlorinPop
    numbers.push(600, 700, 800, 900, 1000);
    console.log(numbers);
    