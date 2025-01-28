import React from 'react'

const Contact = () => {
  return (
    <div>
        <section>
          <div className='Contact-text'>
            Contact US

            DO YOU HAVE ANY QUESTIONS

            REACH OUT TO US 
            <ul>
              <ol> EMAIL :</ol>
              <ol> PHONE NUMBER  :</ol>
              <ol> WHATSAPP </ol>
            </ul>
          </div>
          <div className='container'>
          <form action='./submit'>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" />

                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" />

                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" />

                  <button type="submit">Submit</button>
            </form>

          </div>
        </section>
    </div>
  )
}

export default Contact