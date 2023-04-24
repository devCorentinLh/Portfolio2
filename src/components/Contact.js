import React from "react"

function ContactForm() {
  return (
    <div className="contact">
      <form
        name="contact"
        method="post"
        className="contact__form"
        data-netlify="true"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label for="name">Nom: </label>
        <input type="text" name="name" />

        <label for="email">Email: </label>
        <input type="email" name="email" />

        <label for="telephone">Téléphone: </label>
        <input type="telephone" name="telephone" />

        <label for="message">Message: </label>
        <textarea name="message"></textarea>

        <button type="submit">Envoyer</button>
      </form>
      ,
    </div>
  )
}

export default ContactForm