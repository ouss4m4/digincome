import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

/* import SubscriptionModal from "../subs-modal/SubscriptionModal" */
import Share from "../Share"
import "./footer.css"

export default function Footer() {
  const [formName, setNameValue] = useState("")
  const [formEmail, setMailValue] = useState("")
  const [isPosting, setPostingValue] = useState(false)

  /*
  const [showModal, setModalValue] = useState(false)
   useEffect(() => {
    setTimeout(() => {
      showModalIfInitial()
    }, 45000)
  }) */
  /* const showModalIfInitial = () => {
    let firstTime = localStorage.getItem("initialModal")
    if (firstTime === null) {
      setModalValue(true)
      localStorage.setItem("initialModal", "done")
    }
  }
  */

  const handleNameChange = e => {
    setNameValue(e.target.value)
  }
  const handleMailChange = e => {
    setMailValue(e.target.value)
  }

  /* const closeModal = () => {
    setModalValue(false)
  } */

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
      {/*  {showModal && <SubscriptionModal closeModal={closeModal} />} */}
      <div className="limit-size">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-12 form-wrap">
              <p>
                {" "}
                Subscribe to our news Letters and get weekly Digital Income news{" "}
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
                <input className="submit-btn" type="submit" value="Subscribe" />
                {/* {isPosting ? (
                  <svg className="spinner" viewBox="0 0 50 50">
                    <circle
                      className="path"
                      cx="25"
                      cy="25"
                      r="20"
                      fill="none"
                      strokeWidth="5"
                    ></circle>
                  </svg>
                ) : (
                  <input
                    className="submit-btn"
                    type="submit"
                    value="Subscribe"
                  />
                )} */}
              </form>
            </div>
          </div>

          <div className="col-sm-8">
            <div className="links">
              <p>Copyright © 2021 </p> <p> Digital Income</p>{" "}
              <a style={{ boxShadow: "none" }} href="/privacy">
                Privacy policy
              </a>
              <a style={{ boxShadow: "none" }} href="/affiliate">
                Affiliate policy
              </a>
              <a style={{ boxShadow: "none" }} href="/disclaimer">
                Disclaimer
              </a>
              <a style={{ boxShadow: "none" }} href="/sitemap.xml">
                Sitemap
              </a>
            </div>
          </div>
          <div className="col-sm-4">
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
          <div className="col-sm-12">
            <blockquote style={{ fontSize: "0.8em", margin: "0" }}>
              Any information provided on this website does not constitute
              investment advice or investment recommendation nor does it
              constitute an offer to buy or sell or a solicitation of an offer
              to buy or sell shares or units in any of the investment funds or
              other financial instruments described on this website.
            </blockquote>
          </div>

          {/*
           */}
        </div>
      </div>
    </footer>
  )
}
