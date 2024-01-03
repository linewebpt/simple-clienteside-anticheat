(function () {  // Developed by LineWeb PT. Licensed under MIT License. We hope this can help you reach your goals!
    // Capture initial state
    var initialDOMState = document.documentElement.outerHTML;
    var lastMousePosition = { x: 0, y: 0 };

    // Function to check for DOM changes
    function checkDOMChanges() {
        var currentDOMState = document.documentElement.outerHTML;

        if (currentDOMState !== initialDOMState) {
            console.error('Cheating detected! Page has been modified.');
            // You might want to take further actions here, such as redirecting the user or logging the incident on the server.
        }
    }

    // Function to check for mouse movements
    function checkMouseMovement() {
        document.addEventListener('mousemove', function (event) {
            if (Math.abs(event.clientX - lastMousePosition.x) > 10 || Math.abs(event.clientY - lastMousePosition.y) > 10) {
                console.error('Cheating detected! Unusual mouse movement.');
                // You might want to take further actions here.
            }

            lastMousePosition = { x: event.clientX, y: event.clientY };
        });
    }

    // Set up periodic checks
    setInterval(checkDOMChanges, 5000); // Check for DOM changes every 5 seconds
    checkMouseMovement();
})();
