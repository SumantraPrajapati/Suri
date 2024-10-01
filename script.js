const codeText = `
#include<iostream>

int main(){
    std::cout<<"Hello, My Name is Sumantra but call me Suri";
    std::cout<<"C++ Enthusiast on the Path to Becoming a Developer";
    return 0 ;
}
`;

let index = 0;
const typingSpeed = 10; // Milliseconds per character
const codeArea = document.getElementById('code-area');
const typingSound = document.getElementById('typing-sound');
const nameElement = document.getElementById('name');
const cppElement = document.getElementById('cpp-developer');
const combinedElement = document.getElementById('combined');
const socialMedia = document.getElementById('social-media');
const photo = document.getElementById('profile');

// Function to simulate typing effect
function typeCode() {
    if (index < codeText.length) {
        codeArea.innerHTML += codeText.charAt(index); // Use innerHTML to preserve HTML tags
        index++;
        typingSound.play(); // Play typing sound
        setTimeout(typeCode, typingSpeed);
    } else {
        // After typing completes, make the code vanish
        setTimeout(() => {
            codeArea.classList.add('fade-out');
            setTimeout(() => {
                codeArea.style.display = 'none';  // Remove the C++ code from screen
                showName(); // Start name animation
            }, 2000);  // Wait for fade-out animation
        }, 1000); // Wait for 1 second after typing
    }
}


// Function to display name with animation
function showName() {
    nameElement.classList.remove('hidden');
    nameElement.classList.add('fade-in');
    setTimeout(() => {
        hideName();
    }, 3000); // Show name for 3 seconds
}

// Function to hide name with fade-out effect and show 'C++ Developer'
function hideName() {
    nameElement.classList.add('fade-out');
    setTimeout(() => {
        nameElement.classList.add('hidden');
        showCppDeveloper();
    }, 2000); // Time for fade-out animation
}

// Function to display 'C++ Developer' with animation
function showCppDeveloper() {
    cppElement.classList.remove('hidden');
    cppElement.classList.add('fade-in');
    setTimeout(() => {
        hideCppDeveloper();
    }, 3000); // Show 'C++ Developer' for 3 seconds
}

// Function to hide 'C++ Developer' and show combined message
function hideCppDeveloper() {
    cppElement.classList.add('fade-out');
    setTimeout(() => {
        cppElement.classList.add('hidden');
        showCombined();
    }, 2000);
}

// Function to display the final combined message
function showCombined() {
    combinedElement.classList.remove('hidden');
    combinedElement.classList.add('fade-in');
    showSocial();
    Profile_photo();
}

// Function to display social media handles
function showSocial() {
    socialMedia.classList.remove('hidden');
    socialMedia.classList.add('fade-in');
}

function Profile_photo() {
    photo.classList.remove('hidden');
    photo.classList.add('fade-in');
}

// Start typing after user interaction
// Start typing automatically when the site is loaded
window.onload = function() {
    typeCode(); // Call the typing animation function once the page is loaded
};


// Wait for user to interact with the document
document.addEventListener('click', startTypingAfterInteraction);
document.addEventListener('keydown', startTypingAfterInteraction);
