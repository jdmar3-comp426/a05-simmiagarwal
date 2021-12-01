window.addEventListener("load", function () {
    function sendData() {
        // get data from form element
        const sendRequest = new XMLHttpRequest();
        const signupInfo = new FormData(form);

        // error handling
        sendRequest.addEventListener("error", function (event) {
            alert("Submission unsuccessful, please check your input and try again");
        });

        // success message
        sendRequest.addEventListener("load", function (event) {
            alert("Account successfully created");
        });

        // open endpoint and send data
        sendRequest.open("POST", "http://localhost:5000/app/new/user");
        sendRequest.send(signupInfo);

    }

    // define location of form to get data from
    const form = document.getElementById("signupForm");

    // listener that calls send data function
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        sendData();
    });
});