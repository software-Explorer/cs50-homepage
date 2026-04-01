
total_boxes = 9;
document.addEventListener('DOMContentLoaded', function(){
    cells = document.body.querySelectorAll('.cell');
    run = true; // useful for limiting user to mark just in their turn
    show_result = document.getElementById('result');
    for (let i=0; i<total_boxes; i++){
        cells[i].addEventListener('click', mark_cell_AI);
    }
 /*    board = ['X', 'O', 'X',
             'O', 'X', 'X',
             'O', 'X', 'O',];


    let result = findBestMove(board);
    console.log("Best Index:", result.index);
    console.log("Predicted Score:", result.score);
 */

});

//tells whose turn is next
// Use 'let' to ensure variables are block-scoped for recursions
function whose_turn(board){
// we agree first player move will be 'X'
    let empty_cells = 0;
    for (let i=0; i<9; i++){
        if (board[i] === '') empty_cells ++;
    }
    // If 9, 7, 5, 3, 1 cells are left, it's 'X' (Max)
    // If 8, 6, 4, 2 cells are left, it's 'O' (Min)
    return (empty_cells % 2 !== 0) ? "max" : "min";
}

// Possible moves by a current player
function possible_actions(board){
    let player = (whose_turn(board) === 'max') ? 'X' : 'O';
    let actions = [];

    for (let i=0; i<9; i++) {
        if (board[i] === ''){
            // Create a copy of the board and place the move
            let new_board = [...board];
            new_board[i] = player;
            actions.push(new_board);
        }
    }
    return actions;
}


function is_terminal(board){
    // need to check rows, columns and diagnols
    // rows
    if (board[0] !==''  && board[1] ==board[0]  && board[2] ==board[1] ){ // first row
        return true;
    }

    if (board[3] !=''  && board[3] ==board[4]  && board[5] ==board[4] ){ // second row
        return true;
    }

    if (board[6] !=''  && board[6] ==board[7]  && board[8] ==board[7] ){ // third row
        return true;
    }


    //coloums
    if (board[0] !='' && board[0] ==board[3]  && board[6] ==board[3]  ){ // first column
        return true;
    }

    if (board[1] !='' && board[1] ==board[4]  && board[7] ==board[4] ){ // second column
        return true;
    }

    if (board[2] !='' &&  board[2] ==board[5]  && board[8] ==board[5] ){ // third column
        return true;
    }

    //diagnols
    if (board[0] !='' && board[0] ==board[4]  && board[8] ==board[4] ){
        return true;
    }

    if (board[2] !='' && board[2] ==board[4]  && board[6] ==board[4] ){
        return true;
    }

    // some boxes left so game is continuing
    for (let i=0; i<total_boxes; i++){
        if (board[i]  == ''){
            return false;
        }
    }

    // if for loop did not returned any empty box then it should be draw.
    return true;
}





function Value(board){
    // need to check rows, columns and diagnols
    // rows
    if (board[0] !=''  && board[1] ==board[0]  && board[2] ==board[1] ){ // first row
        if (board[0]  == 'X'){
            return 1;
        }
        else{
            return -1;
        }
    }

    if (board[3] !=''  && board[3] ==board[4]  && board[5] ==board[4] ){ // second row
        if (board[3]  == 'X'){
            return 1;
        }
        else{
            return -1;
        }
    }

    if (board[6] !=''  && board[6] ==board[7]  && board[8] ==board[7] ){ // third row
        if (board[6]  == 'X'){
            return 1;
        }
        else{
            return -1;
        }
    }


    //coloums
    if (board[0] !='' && board[0] ==board[3]  && board[6] ==board[3]  ){ // first column
        if (board[0]  == 'X'){
            return 1;
        }
        else{
            return -1;
        }
    }

    if (board[1] !='' && board[1] ==board[4]  && board[7] ==board[4] ){ // second column
        if (board[1]  == 'X'){
            return 1;
        }
        else{
            return -1;
        }
    }

    if (board[2] !='' &&  board[2] ==board[5]  && board[8] ==board[5] ){ // third column
        if (board[2]  == 'X'){
            return 1;
        }
        else{
            return -1;
        }
    }

    //diagnols
    if (board[0] !='' && board[0] ==board[4]  && board[8] ==board[4] ){
        if (board[0]  == 'X'){
            return 1;
        }
        else{
            return -1;
        }
    }

    if (board[2] !='' && board[2] ==board[4]  && board[6] ==board[4] ){
        if (board[2]  == 'X'){
            return 1;
        }
        else{
            return -1;
        }
    }

    // When draw return value 0
    return 0;
}


function minimax(game_state){
    if (is_terminal(game_state)){
        return Value(game_state);
    }

    if (whose_turn(game_state) === "max"){
        let best_val = -Infinity; // renamed to avoid confusion with Value()
        // Use for...of to get actual board states
        for (let action_state of possible_actions(game_state)){
            best_val = Math.max(best_val, minimax(action_state));
        }
        return best_val;
    } else {
        let best_val = Infinity;
        for (let action_state of possible_actions(game_state)) {
            best_val = Math.min(best_val, minimax(action_state));
        }
        return best_val;
    }
}


function findBestMove(board) { // works on virtual board not actual 'cells' node list
    let bestScore = -Infinity;
    let moveIndex = -1;
    let player = (whose_turn(board) === 'max') ? 'X' : 'O';

    // If it's min turn(O), we start with Infinity
    if (whose_turn(board) === 'min') {
        bestScore = Infinity;
    }

    for (let i = 0; i < 9; i++) {
        // Check if the cell is available
        if (board[i] === ''){
            // 1. Make a temporary move
            board[i] = player;

            // 2. Check the score for the temporary move
            let score = minimax(board);

            // 3. Backtrack (Undo the move)
            board[i] = '';

            // 4. Track the best score and its index
            if (whose_turn(board) === 'max'){
                if (score > bestScore){
                    bestScore = score;
                    moveIndex = i;
                }
            }else {
                if (score < bestScore){
                    bestScore = score;
                    moveIndex = i;
                }
            }

        }
    }

    return { index: moveIndex, score: bestScore};
}



function mark_cell_AI(event){
    if (window.currentGameMode !== 'AI') return;
    if (!run || event.target.textContent !== '') return;

    run = false;
    // 1. Human Move (Update the DOM)
    event.target.textContent = 'X';

    // 2. Create a "Virtual Board" (Array of strings) for the AI
    let currentBoardState = Array.from(cells).map(cell => cell.textContent);

    if (is_terminal(currentBoardState)) {
        handleGameOver(currentBoardState);
        return;
    }

   //3. AI Turn
   setTimeout(function(){
    // AI calculates using the virtual board
    let decision = findBestMove(currentBoardState);

    if (decision.index != -1){
        cells[decision.index].textContent = 'O';

        //Re-check state after AI move
        let updatedState = Array.from(cells).map(cell => cell.textContent);
        if (is_terminal(updatedState)) handleGameOver(updatedState);
        else run = true; // Allow player to click again
    }
   }, 500);
}

function handleGameOver(state) {
    let score = Value(state);
    if (score === 1) show_result.textContent = "Congrats! You won!";
    else if (score === -1) show_result.textContent = "AI won!";
    else show_result.textContent = "Game Draw!";
    run = false;
}








