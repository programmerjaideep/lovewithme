let boyfriend = document.getElementById('boyfriend');
let girlfriend = document.getElementById('girlfriend');
let calculate_btn = document.getElementById('calculate_love');
let output_section = document.querySelector('.output');
let music = new Audio('assets/pop.mp3');
let go_back = document.getElementById('go_back');
let girlfriend_output = document.getElementById('output_girlfriend');
let boyfriend_output = document.getElementById('output_boyfriend');
let love_score = document.getElementById('love_score');

let score_value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Fixed range of random scores

// Button click event
calculate_btn.onclick = () => {
    let boyfriendName = boyfriend.value.trim(); // Get input value and trim whitespaces
    let girlfriendName = girlfriend.value.trim();

    if (boyfriendName === "" || girlfriendName === "") {
        alert("Please enter both names!");
        return;
    }

    // Matching predefined conditions
    if (
        boyfriendName === "Jaideep" &&
        ["Aastha", "Aashi", "Shruti", "Sheetal", "Simran"].includes(girlfriendName)
    ) {
        output_section.style.top = "0"; // Show output section
        girlfriend_output.innerText = girlfriendName;
        boyfriend_output.innerText = boyfriendName;
        love_score.innerText = 10; // Fixed score for these conditions
    } else {
        // For other cases, generate a random score
        output_section.style.top = "0"; // Show output section
        girlfriend_output.innerText = girlfriendName;
        boyfriend_output.innerText = boyfriendName;
        music.currentTime = 0; // Reset music
        music.play(); // Play sound effect

        let random_score = Math.floor(Math.random() * score_value.length) + 1;
        love_score.innerText = random_score;
    }
};

// Go back button click event
go_back.onclick = () => {
    output_section.style.top = "-100%"; // Hide output section
    music.currentTime = 0; // Reset music
    music.play(); // Play sound effect
};
