document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startAudioButton');
    const header = document.getElementById('header');
    //audio
    const audio1 = document.getElementById('audio1');
    const audio2 = document.getElementById('audio2');
    const audio3 = document.getElementById('audio3');

    // Store audio elements in an array for easy random selection
    const audioFiles = [audio1, audio2, audio3];

    let intervalId; // To hold the ID of our repeating timer

    // Function to play a random audio file
    function playRandomAudio1() {
        // Pause any currently playing audio to prevent overlapping
        audioFiles.forEach(audio => {
            audio.pause();
            audio.currentTime = 0; // Reset to the start
        });

        // Select a random audio element
        const randomIndex = Math.floor(Math.random() * audioFiles.length);
        const selectedAudio = audioFiles[randomIndex];

        // Play the selected audio
        selectedAudio.play().catch(error => {
            // Catch potential errors, like if autoplay is still blocked unexpectedly
            console.warn("Audio playback prevented:", error);
            console.warn("Ensure user interaction occurred before starting audio loop.");
            // You might want to stop the interval here if playback is consistently failing
            // clearInterval(intervalId);
            // startButton.style.display = 'block'; // Show button again
        });
    }

    // audio group 2

    //only making whispers
    const whisper1 = document.getElementById('whisper1');
    const whisper2 = document.getElementById('whisper2');
    const whisper3 = document.getElementById('whisper3');
    const whisper4 = document.getElementById('whisper4');
    const whisper5 = document.getElementById('whisper5');
    const whisper6 = document.getElementById('whisper6');
    const whisper7 = document.getElementById('whisper7');
    const whisper8 = document.getElementById('whisper8');
    const whisper9 = document.getElementById('whisper9');

    //array for whisper audio
    const whisperFiles = [whisper1,whisper2, whisper3, whisper4, whisper5, whisper6,  whisper7, whisper8, whisper9];

    let intervalIdGroup2;

    function playRandomAudioGroup2(){
        whisperFiles.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });

        const randomIndex = Math.floor(Math.random() * whisperFiles.length);
        const selectedAudio = whisperFiles[randomIndex];

        selectedAudio.play().catch(error => {
            console.warn("whisper files prevented:", error);
        });
    }

    // Event listener for the button click
    startButton.addEventListener('click', function() {
        // Hide other elements once the audio starts
        startButton.style.display = 'none';
        header.style.display = 'none';

        // Play the first random audio immediately
        playRandomAudio1();

        // Set up the interval to play a random audio every 10 seconds (10000 milliseconds)
        intervalId = setInterval(playRandomAudio1, 27000);

        //for the 2nd audio files
        playRandomAudioGroup2();
        intervalIdGroup2 = setInterval(playRandomAudioGroup2, 17000);

        console.log("Audio loop initiated. Check console for playback warnings if any.");
    });

    // Optional: Add a way to stop the audio later if needed (e.g., if player leaves the page)
    // You could add another button, or implement logic when leaving the page.
    // For now, it will loop indefinitely after starting.
});