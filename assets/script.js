function sendMail(event) {
  event.preventDefault(); // Impedisce il refresh della pagina

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Per favore compila tutti i campi.");
    return;
  }

  const params = {
    name,
    email,
    message,
  };

  emailjs.send("service_2t3a2ic", "template_aj7j7ud", params)
    .then(function () {
      alert("Email inviata con successo!");
      // Pulisce i campi dopo invio
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch(function (error) {
      console.error("Errore invio email:", error);
      alert("Si è verificato un errore. Controlla la console per dettagli.");
    });
}