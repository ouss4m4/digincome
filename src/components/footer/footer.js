import React, { useState, useEffect } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

import SubscriptionModal from "../subs-modal/SubscriptionModal"
import Share from "../Share"
import "./footer.css"

export default function Footer() {
  const [formName, setNameValue] = useState("")
  const [formEmail, setMailValue] = useState("")
  const [isPosting, setPostingValue] = useState(false)
  const [showModal, setModalValue] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      showModalIfInitial()
    }, 15000)
  }, [])

  const showModalIfInitial = () => {
    let firstTime = localStorage.getItem("initialModal")
    if (firstTime === null) {
      setModalValue(true)
      localStorage.setItem("initialModal", "done")
    }
  }

  const handleNameChange = e => {
    setNameValue(e.target.value)
  }
  const handleMailChange = e => {
    setMailValue(e.target.value)
  }

  const closeModal = () => {
    setModalValue(false)
  }

  const _handleSubmit = e => {
    e.preventDefault()
    setPostingValue(true)
    addToMailchimp(formEmail, {
      FNAME: formName,
    })
      .then(() => {
        setPostingValue(false)
      })
      .catch(() => {
        setPostingValue(false)
      })
  }
  return (
    <footer className="footer">
      {showModal && <SubscriptionModal closeModal={closeModal} />}

      <div className="container">
        <div className="upper">
          <div className="form-wrap">
            <p>
              Subscribe to our Newsletter and get weekly updates and Digital
              Market News to help you grow.
            </p>
            <form onSubmit={_handleSubmit}>
              <input
                type="text"
                onChange={handleNameChange}
                value={formName}
                placeholder="name"
                name="name"
                className="name-input"
              />
              <input
                type="email"
                onChange={handleMailChange}
                value={formEmail}
                placeholder="email"
                name="email"
                className="email-input"
                required
              />
              {isPosting ? (
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
                    value="Subscribe"
                  />
                </>
              )}
            </form>
          </div>
          <div className="sharewrap">
            <Share
              iconSize={34}
              margin={"6px"}
              media={
                "https://digincome.com/static/c7a038fa28d293ce55ebda088bfe48b3/63d84/Stonks.png"
              }
              round={true}
              shareUrl={"https://digincome.com"}
              title={"Digital Income"}
            />
          </div>
        </div>
        <blockquote
          style={{ fontSize: "0.8em", margin: "0", maxWidth: "800px" }}
        >
          Any information provided on this website does not constitute
          investment advice or investment recommendation nor does it constitute
          an offer to buy or sell or a solicitation of an offer to buy or sell
          shares or units in any of the investment funds or other financial
          instruments described on this website.
        </blockquote>
      </div>
    </footer>
  )
}
