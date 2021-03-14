import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import addToMailchimp from "gatsby-plugin-mailchimp"

import "./modal.css"

export default function SubscriptionModal({ closeModal }) {
  const [name, setNameValue] = useState("")
  const [email, setEmailValue] = useState("")
  const [posting, setPostingValue] = useState(false)

  const handleNameChange = e => {
    setNameValue(e.target.value)
  }

  const handleEmailChange = e => {
    setEmailValue(e.target.value)
  }

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "dollars-laptop.png" }) {
        childImageSharp {
          fluid(maxWidth: 230) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const handleSubmit = e => {
    e.preventDefault()
    setPostingValue(true)
    addToMailchimp(email, {
      FNAME: name,
    })
      .then(({ msg, result }) => {
        setPostingValue(false)
        closeModal()
      })
      .catch(() => {
        setPostingValue(false)
      })
  }

  return (
    <div className="modal">
      <div className="modal-content" style={{ textAlign: "center" }}>
        <div>
          <h3 style={{ fontSize: "1.2em" }}>
            Subscribe To Our NewsLetter, And Get Your First Challenge On Money
            Making
          </h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleNameChange}
              placeholder="name"
              name="name"
              className="name-input"
            />
            <input
              type="email"
              onChange={handleEmailChange}
              placeholder="email"
              name="email"
              className="email-input"
              required
            />
            <div className="form-btn-wrap">
              {posting ? (
                <div>
                  <svg className="spinner" viewBox="0 0 20 20">
                    <circle
                      className="path"
                      cx="10"
                      cy="10"
                      r="7"
                      fill="none"
                      strokeWidth="1"
                    ></circle>
                  </svg>
                </div>
              ) : (
                <>
                  <input
                    className="submit-btn"
                    type="submit"
                    value="Show me $$"
                  />
                  <button onClick={closeModal} className="cancel-btn">
                    No. Keep it
                  </button>
                </>
              )}
            </div>
          </form>
        </div>

        <div className="book-wrap">
          <Image fluid={data.file.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  )
}
