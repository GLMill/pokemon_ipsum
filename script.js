window.onload = function(){
   
    var words=['pika pika', 'pikachu', 'thunderbolt', 'trainer','battle','abra', ' ash', 'ace trainer', 'pokeball', 'charmander', 'char', 'squirtle', 'bulbasaur', 'i choose you','onyx', 'jessie james', 'meaowth', 'team rocket', 'blasting of again','pokedex',
    'gameboy colour', 'sycther', 'jiggly puff', 'growlith', 'gym battle', 'professor rowan','mew-two', 'mew', 'a wild '];
    
    // event listener for submit button 
    document.getElementById("submit").addEventListener("click", make_ipsum);
    //----------------------------------------------------- helper functions
    function clear_text_area(){
        //clearing old stuff
        document.getElementById('text_area').innerHTML='';
    }

    function capitalize(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }   
       //----------------------------------------------------- main ipsum function
    function make_ipsum(){
        clear_text_area();
        //setting up new variable s
        var number_of_paragraphs = parseInt(document.getElementById('number_of_paragraphs').value);
        var words_in_para = 40; // this should be adjustable 
        var output = [];
        
        while (number_of_paragraphs > 0){
            output.push('<p class="output">');
            for(var i = 0; i <= words_in_para; i++){
                var word = words[Math.ceil((Math.random() * words.length))];
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
            number_of_paragraphs--;
        }// end of while loop
        //put in text area
       document.getElementById('text_area').innerHTML=(output.join(' '));
    }
}
