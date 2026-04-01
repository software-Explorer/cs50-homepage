document.addEventListener('DOMContentLoaded', function(){
    total_boxes = 9;
    window.cells = document.querySelectorAll('.cell');
    //r//un = true; // useful for limiting user to mark just in their turn
    window.show_result = document.getElementById('result');
    for (let i=0; i < window.cells.length; i++){
        cells[i].addEventListener('click', mark_cell_easy);
    }
})


function mark_cell_easy(event){
    // run in human mode only.
    if (window.currentGameMode !== 'human') return;
    // Human move
    if (!window.run || event.target.textContent !== '') return; // default true, immediatly flase which helps to ignore mouse clicks on other boxes.

        window.run = false;
        event.target.textContent = 'X';


        var [terminal_state, result] = is_terminal_state(window.cells);

        if (terminal_state){
            handleLegacyGameOver(result);
            return;
        }


    // Computer move
    setTimeout(function(){
        let index = opponent_move_index(window.cells);
        if (index !== "10"){
            window.cells[index].textContent = 'O';
            let [t_state, res] = is_terminal_state(window.cells);
            if (t_state) {
                handleLegacyGameOver(res);
            } else {
                window.run = true; // only allow click if game is not over
            }
        }
    }, 500);
}

function handleLegacyGameOver(result) {
    if (result === 'X') window.show_result.textContent = "Congrats! You won!";
    else if (result === 'O') window.show_result.textContent = "Mode easy won";
    else window.show_result.textContent = "Game Draw!";
    window.run = false;
}



// AI random marker
function opponent_move_index(board){
    random_cell_index = Math.floor(Math.random() * 9);
    console.log('random_cell_index: ' + String(random_cell_index));
    last_cell_index = 8;
    blank_cell_index = 'need to find';

    offset_index_by_1 = 1;
    left_cells_count = (random_cell_index - 1) + offset_index_by_1;
    right_cells_count = last_cell_index - random_cell_index;

    left_right_pairs = 'depends upon condition';
    if (left_cells_count == 0 || right_cells_count == 0){
        left_right_pairs = 0;
    }
    else{
        left_right_pairs = Math.min(left_cells_count, right_cells_count);
    }

    left_cells_remaining = left_cells_count - left_right_pairs;
    right_cells_remaining = right_cells_count - left_right_pairs;



    if (board[random_cell_index].textContent == ''){ // if box is empty return the index
        blank_cell_index = random_cell_index;
        console.log('lucky Ai found empty box')
        return blank_cell_index;
    }
    else{                                           // searching left and right cells in alternating order for left_right_pairs and returning the index if box is empty
        for (i = 1; i <= left_right_pairs; i++){
            if (board[random_cell_index + i].textContent == ''){
                blank_cell_index = random_cell_index + i;
                console.log('right_pair_found_empty: ' + String(blank_cell_index));
                return blank_cell_index;
            }
            else{
                console.log('right_pair_not_found_empty: ' + String(random_cell_index + i));
            }
            if (board[random_cell_index - i].textContent == ''){
                blank_cell_index = random_cell_index - i;
                console.log('left_pair_found_empty: ' + String(blank_cell_index));
                return blank_cell_index;
            }
            else{
                console.log('left_pair_not_found_empty: ' + String(random_cell_index - i));
            }
        }

        if (left_cells_remaining > right_cells_remaining){ // checking remaining cells in left side from random_cell_index after left_right_pairs are found to be pre-occupied
            loop_initializer_value = left_cells_remaining - offset_index_by_1;
            for (i = loop_initializer_value; i >= 0; i--)
            {
                if (board[i].textContent == ''){
                    blank_cell_index = i;
                    console.log('remaining left side cell found empty: ' + String(blank_cell_index));
                    return blank_cell_index;
                }
                else{
                    console.log('remaining left side cell not empty: ' + String(i));
                }
            }
        }
        if (right_cells_remaining > left_cells_remaining){ // checking remaining cells in right  side from random_cell_index after left_right_pairs are found to be pre-occupied
            loop_initializer_value = random_cell_index + left_right_pairs + offset_index_by_1;
            for(i = loop_initializer_value; i <= last_cell_index; i++){
                if (board[i].textContent == ''){
                    blank_cell_index = i;
                    console.log('remaining right cell found empty: ' + String(blank_cell_index));
                    return blank_cell_index;
                }
                else{
                    console.log('remaining right cell not found empty: ' + String(i));
                }
            }
        }
    }

    return "10"; // if no box is empty return 10. Useful for printing console.log('No more squares left')
}


// function for checking terminal states: X-wins or O-wins or draw
function is_terminal_state(board){
    // need to check rows, columns and diagnols
    // rows
    if (board[0].textContent!=''  && board[1].textContent==board[0].textContent && board[2].textContent==board[1].textContent){ // first row
        return [true, board[0].textContent];
    }

    if (board[3].textContent!=''  && board[3].textContent==board[4].textContent && board[5].textContent==board[4].textContent){ // second row
        return [true, board[3].textContent];
    }

    if (board[6].textContent!=''  && board[6].textContent==board[7].textContent && board[8].textContent==board[7].textContent){ // third row
        return [true, board[6].textContent];
    }


    //coloums
    if (board[0].textContent!='' && board[0].textContent==board[3].textContent && board[6].textContent==board[3].textContent ){ // first column
        return [true, board[0].textContent];
    }

    if (board[1].textContent!='' && board[1].textContent==board[4].textContent && board[7].textContent==board[4].textContent){ // second column
        return [true, board[1].textContent];
    }

    if (board[2].textContent!='' &&  board[2].textContent==board[5].textContent && board[8].textContent==board[5].textContent){ // third column
        return [true, board[2].textContent];
    }

    //diagnols
    if (board[0].textContent!='' && board[0].textContent==board[4].textContent && board[8].textContent==board[4].textContent){
        return [true, board[0].textContent];
    }

    if (board[2].textContent!='' && board[2].textContent==board[4].textContent && board[6].textContent==board[4].textContent){
        return [true, board[2].textContent];
    }

    // some boxes left so game is continuing
    for (i=0; i<total_boxes; i++){
        if (board[i].textContent == ''){
            return [false, 'game in progress'];
        }
    }

    // if for loop did not returned any empty box then it should be draw.
    return [true, 'draw'];
}


