$(document).ready(function(){
   
    function make_ipsom(){
        //----------------------------words
        var words=[' pika pika', ' pikachu', ' thunderbolt', ' trainer',' battle',' abra',' ash', ' ace trainer', ' pokeball', ' charmander', ' char', ' squirtle', ' bulbasaur', ' i choose you',' onyx', ' jessie james', ' meaowth', ' team rocket', ' blasting of again',' pokedex', ' gameboy colour', ' sycther', ' mew-two', ' mew', ' a wild ', ];
        //------------------------------ turning this into a function
        var number_of_paragraphs = $('#number_of_paragraphs').val();
        //---------------------------------------varaibales
        var paragraph='';
        var limit = words.length;
        var a = 0;
        var text='';
    //--------------------------------- making paragraphs
    while (a < number_of_paragraphs){
        for(i=0; i<limit; i++){
            var word = Math.floor(Math.random() * limit);
            paragraph += words[word];
        }
        paragraph+= '.\n\n\n';
        text += paragraph;
        paragraph='';
        a++;
    }
    $('#text_area').append("<p>"+text+"</p>");
    };
    
    //---------------- only make ipsom when told
    $('#submit').on('click', function(){
    $('#text_area > p').remove();
    make_ipsom();
    })
});