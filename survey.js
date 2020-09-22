const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [

  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "

];

const answers = [];

for (const index in questions) {

  rl.question(`${questions[0]}`, (name) => {

    // console.log(answer)

    rl.question(`${questions[1]}`, (activity) => {

      // console.log(answer)
      
      rl.question(`${questions[2]}`, (music) => {

        // console.log(answer)
        
        rl.question(`${questions[3]}`, (meal) => {

          // console.log(answer)
          
          rl.question(`${questions[4]}`, (food) => {

            // console.log(answer)
            
            rl.question(`${questions[5]}`, (sport) => {

              // console.log(answer)
              
              rl.question(`${questions[6]}`, (superpower) => {

                // console.log(answer)
                
                console.log(`${name} loves ${activity} while listening to ${music}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
};