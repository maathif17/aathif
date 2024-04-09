document.getElementById("SubscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;

    localStorage.setItem('subscriptionEmail', email);

    alert("Thank you for subscribing!");
});