// asthetics

document.addEventListener('DOMContentLoaded', function(){

    const Play_easy_button = document.getElementById('Easy_mode');
    const Play_AI_button = document.getElementById('AI_mode');

    Play_easy_button.addEventListener('click', function(event){
        Play_easy_button.style.backgroundColor = "lightGreen";
        Play_AI_button.style.backgroundColor = "lightBlue";
        //window.currentGameMode = 'human';
        document.getElementById('heading').textContent = 'Welcome! to easy mode';
        console.log(window.currentGameMode);
    });

    Play_AI_button.addEventListener('click', function(event){
        Play_AI_button.style.backgroundColor = 'lightGreen';
        Play_easy_button.style.backgroundColor = 'lightBlue';
        //window.currentGameMode = 'AI';
        document.getElementById('heading').textContent = 'I Am AI. Can You Beat Me ?';
        console.log(window.currentGameMode);
    })



    // Now, call resetGame() inside your button listeners:
    Play_easy_button.addEventListener('click', function(event){
        resetGame();
        window.currentGameMode = 'human';
    });

    Play_AI_button.addEventListener('click', function(event){
        resetGame();
        window.currentGameMode = 'AI';
    })
})


// resets the board
function resetGame(){
    // 1. Clear the text in all cells
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.textContent = '');

    // 2. Clear the result message
    document.getElementById('result').textContent = '';

    // 3. Reset the 'run' flag (since it's global, we can access it)
    window.run = true;
}


// Go to Homepage
document.addEventListener('DOMContentLoaded', function(){
    let homepage = document.querySelector('p');
    homepage.addEventListener('click', function(){
        window.location.href = "../index.html";
    });
});



