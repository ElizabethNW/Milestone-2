(function () {
    emailjs.init("user_d1oKOZEWf4eIedK3zMVgl");
})();

function sendMail(contactForm) {
    emailjs.send("service_78z8ikf","template_k1qm4yp", {
            type_of_request: contactForm.subject.value,
            from_name: contactForm.name.value,
            from_email: contactForm.emailaddress.value,
            project_request: contactForm.projectsummary.value,
        })
        .then(
            function (response) {
                alert("The email has been sent successfully.");
                $("#mail-form").get(0).reset();
            },
            function (error) {
                alert("Try again.");
            }
        );
    return false; 
}