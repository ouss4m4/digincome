import React from "react"
import {
  FacebookShareButton,
  PinterestShareButton,
  PinterestIcon,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "react-share"

const Share = ({ title, tags, round, iconSize, shareUrl, media, margin }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    }}
  >
    <FacebookShareButton url={shareUrl} style={{ marginRight: margin }}>
      <FacebookIcon
        size={iconSize ? iconSize : 50}
        round={round}
        widths="10"
        xHeight="2"
      />
    </FacebookShareButton>
    <FacebookMessengerShareButton
      appId=""
      url={shareUrl}
      style={{ marginRight: margin }}
    >
      <FacebookMessengerIcon size={iconSize ? iconSize : 50} round={round} />
    </FacebookMessengerShareButton>
    <TwitterShareButton
      url={shareUrl}
      title={title}
      hashtags={tags}
      style={{ marginRight: margin }}
    >
      <TwitterIcon size={iconSize ? iconSize : 50} round={round} />
    </TwitterShareButton>
    <WhatsappShareButton
      url={shareUrl}
      title={title}
      style={{ marginRight: margin }}
    >
      <WhatsappIcon size={iconSize ? iconSize : 50} round={round} />
    </WhatsappShareButton>
    {media ? (
      <PinterestShareButton url={shareUrl} media={media}>
        <PinterestIcon size={iconSize ? iconSize : 50} round={round} />
      </PinterestShareButton>
    ) : null}
  </div>
)

export default Share
