const form = document.querySelector('#wf-form-Inquiry-form')
const nom = document.querySelector('#short-form-full-name')
const message = document.querySelector('#short-form-address')
const nombre = document.querySelector('#nombre') || "xxx"
const email = document.querySelector('#short-form-contact')
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = nom.value;
    const messages = message.value;
    const numbers = nombre.value;
    const emails = email.value;
    console.log(name, messages, numbers,emails);
    try {
        const response = await axios.post('/.netlify/functions/sendEmail', {
            name: name,
            messages: messages,
            numbers: numbers,
            emails: emails
        });
		nom.value = ""
        message.value =""
        nombre.value = ""
        email.value = ""
    } catch (error) {
        console.error("oups! elle y a une erreur:", error);
    }
});