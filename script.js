$(document).ready(function(){
   
    function make_ipsom(){
        //----------------------------words
        var words=['pika pika', 'pikachu', 'thunderbolt', 'trainer','battle','abra', ' ash', 'ace trainer', 'pokeball', 'charmander', 'char', 'squirtle', 'bulbasaur', 'i choose you','onyx', 'jessie james', 'meaowth', 'team rocket', 'blasting of again','pokedex',
        'gameboy colour', 'sycther', 'mew-two', 'mew', 'a wild ', ];
        //------------------------------ turning this into a function
        var number_of_paragraphs = $('#number_of_paragraphs').val();
        number_of_paragraphs = parseInt(number_of_paragraphs);
        //---------------------------------------varaibales
        var words_in_para = 40;
        var output = [];
        //flag for loop
        var flag = 0;

        while (flag < number_of_paragraphs){
            output.push('<p class="output">');
            for(var i = 0; i< (words_in_para + 1); i++){
                //adding variables to choose random word.
                var choice = Math.floor((Math.random() * words.length) + 1);
                var word = words[choice];
                if(i == 0){ // capitalises
                    output.push(capitalize(word));
                }
                else if(i == words_in_para){
                    output.push(word+'.');
                }
                else{
                    output.push(word);
                }
            }
            output.push('</p>');
            flag ++;
        }// end of while loop
       var output_string = output.join(' ');
       $('#text_area').append("<div>"+output_string+"</div>");
    }
      
      // string is a keyword for a data type, as this uses methods and objects we must specify this.
    function capitalize(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    //---------------- only make ipsom when told
    $('#submit').on('click', function(){
    $('#text_area > div').remove();
    make_ipsom();
    })
});