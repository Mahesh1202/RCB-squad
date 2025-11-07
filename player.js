/**
 * Navigates the user to a Google search for the specified player's profile.
 * @param {string} playerName - The name of the cricketer whose profile is to be viewed.
 */
function viewProfile(playerName) {
    // Encode the player name for use in a URL query string
    const searchQuery = encodeURIComponent(`RCB player ${playerName} profile`);
    
    // Construct the Google search URL
    const searchUrl = `https://www.google.com/search?q=${searchQuery}`;
    
    // Open the new URL in a new tab/window
    window.open(searchUrl, '_blank');
    
    // Optional: Log action to console
    console.log(`Navigating to profile for: ${playerName}`);
}