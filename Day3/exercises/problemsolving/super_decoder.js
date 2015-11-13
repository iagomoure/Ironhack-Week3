var decode = require("./decoder.js")

// we are taking only the backwards
// split the sentence and reverse it
// ["cow", "for", "proper", "fill"]
// call the previous decode function

// we are taking only the even words
// "fill proper for cow"
// reverse them ["cow", "for", "proper", "fill"]
// call the previous decode function

// message should be "cool"



function super_decoder(sentence,type,forwards){
  
  var words = [];

  if (type === "every"){
      words = sentence.split(" ");
  }else if (type === "odd"){
      words = sentence.split(" ").filter(function(word,index){
        return index % 2 != 0;
      });
  }else if (type === "even"){
      words = sentence.split(" ").filter(function(word,index){
          return index === 0 || index % 2 === 0;
      });
  }
  if (forwards){
    return decoder(words);
  }else{
    return decoder(words.reverse());
  }
}

module.exports = super_decoder