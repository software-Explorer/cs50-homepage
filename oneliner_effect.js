
document.addEventListener("DOMContentLoaded", function(){
            //Random character picker
            function random_character(){
                let char=[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e',
                        'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
                        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A',
                        'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
                        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
                        'X', 'Y', 'Z', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
                        '-', '+', '=', '_', '<', '>', ',', '.', '?', '/']

                return char[Math.floor(Math.random() * char.length)];
            }



            //random words from this list will be taken after one is complete continuosly
            who_am_I = [" explorer", , " learner"," Believer_in_god", "Believer_in_teamwork", " doer", " humble"," story-teller"];
            who_am_I_length = who_am_I.length;
            //word = who_am_I[Math.ceil(Math.random() * who_am_I.length)];
            //word_length_0 = 0;

            // this is the html Element which set outs letter one by one and after which next element will play letter animation.
            title = document.getElementById('finished_part_of_word');
            next_letter_place = document.getElementById('letter_animation')

            // typewriter animation for a letter
            function techy_vibe_for_a_letter(){
                let letter_variance = 10;
                //title.textContent = " ";

                for (let i=1; i <= letter_variance ; i++){
                    setTimeout(function(){
                    /* //console.log(title.textContent.slice(0, text_width - 1));
                        title.textContent = title.textContent.slice(0, 1);
                        title.textContent = title.textContent + random_character();
                        if (i == letter_variance + 1){ // actual letter
                            title.textContent[i] = letter;
                        }
                        console.log(title.textContent);*/
                        next_letter_place.textContent = random_character();
                    }, 25 * i);

                }

            }

            // function for removing next_letter_pace textContent at last of our animation
            function no_techy_vibe_for_a_letter(){
                let letter_variance = 10;
                //title.textContent = " ";

                for (let i=1; i <= letter_variance ; i++){
                    setTimeout(function(){
                    /* //console.log(title.textContent.slice(0, text_width - 1));
                        title.textContent = title.textContent.slice(0, 1);
                        title.textContent = title.textContent + random_character();
                        if (i == letter_variance + 1){ // actual letter
                            title.textContent[i] = letter;
                        }
                        console.log(title.textContent);*/
                        next_letter_place.textContent = '';
                    }, 25* i);

                }

            }

                //typewriter_for_a_letter(who_am_I[0]);

                // typewriter_for_a_word using typewriter_for_a_letter

            function techy_vibe_for_a_word(word){
                //word = who_am_I[Math.ceil(Math.random() * who_am_I.length)];
                word_length = word.length;
                time_taken_by_techy_vibe_letter = (10 * 25);

                for (let i = 0; i < word_length; i++){
                    setTimeout(function(){
                        if (i < (word_length - 1)){
                            techy_vibe_for_a_letter();
                        }
                        else{
                            no_techy_vibe_for_a_letter();
                        }

                        /*if (i == (word_length - 1)){
                            next_letter_place.textContent = '';
                        }*/

                        title.textContent = title.textContent + word[i];
                    //title.textContent = title.textContent + word[i];
                        //console.log(title.textContent + "            " );
                        //console.log(next_letter_place.textContent);
                        console.log("id letter animation" + ' ' + next_letter_place.textContent);

                    }, time_taken_by_techy_vibe_letter * i);

                }

            }


            techy_vibe_for_a_word(who_am_I[Math.ceil(Math.random() * who_am_I.length)]);

             setTimeout(function(){
                window.location.href = "https://glorious-bassoon-rq94wwr69jj3xxjg-8080.app.github.dev/homepage/abtar_pahari.html";
                title.textContent = '';
            }, 5000);


    /* time_taken_by_techy_vibe_letter = (250 * 10);
    // random word from list for techy_vibe_for_a_word() and repeat
    for (let i=0; i<who_am_I_length; i++){
        setTimeout(function(){
            random_index = Math.ceil(Math.random() * who_am_I_length);
            console.log(random_index);
            word = who_am_I[random_index];
            console.log(word);
            techy_vibe_for_a_word(word)
        }, (12 * time_taken_by_techy_vibe_letter) * i );

    } */
    //techy_vibe_for_a_word(' explorer');



});




