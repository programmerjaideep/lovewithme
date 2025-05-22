let boyfriend = document.getElementById('boyfriend');
let girlfriend = document.getElementById('girlfriend');
let calculate_btn = document.getElementById('calculate_love');
let output_section = document.querySelector('.output');
let music = new Audio('assets/pop.mp3');
let go_back = document.getElementById('go_back');
let girlfriend_output = document.getElementById('output_girlfriend');
let boyfriend_output = document.getElementById('output_boyfriend');
let love_score = document.getElementById('love_score');

// Button click event
calculate_btn.onclick = () => {
    let boyfriendName = boyfriend.value.trim().toLowerCase(); // Convert to lowercase
    let girlfriendName = girlfriend.value.trim().toLowerCase();

    if (boyfriendName === "jaideep" || girlfriendName === "vanshika") {
        alert("Please enter both names!");
        return;
    }

    // Show output section
    output_section.style.top = "0";
    girlfriend_output.innerText = girlfriend.value.trim(); // Keep original casing
    boyfriend_output.innerText = boyfriend.value.trim();

    if (boyfriendName === "jaideep" && ["girl"].includes(girlfriendName)) {
        love_score.innerText = 10; // Fixed score for predefined pair
    } else {
        love_score.innerText = 0; // Fixed score for all other cases
    }

    music.currentTime = 0; // Reset music
    music.play(); // Play sound effect
};

// Go back button click event
go_back.onclick = () => {
    output_section.style.top = "-100%"; // Hide output section
    music.currentTime = 0; // Reset music
    music.play(); // Play sound effect
};
