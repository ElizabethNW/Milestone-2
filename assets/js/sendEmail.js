(function () {
    emailjs.init("user_uQcNTEkJJ7TdhLFpGgagv");
})();

function sendMail(contactForm) {
    emailjs
        .send("gmail", "template_wtraowc", {
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