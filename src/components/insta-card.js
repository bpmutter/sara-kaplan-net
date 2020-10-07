import React from "react"
import { Link } from "gatsby"

const style = {
  cardWrapper: {
    width: "100%",
  },
  infoPanel: {
    height: 250,
    width: 250,
    borderRadius: "1em",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  img: {
    borderRadius: ".25em",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "0 auto",
    display: "inline-block",
  },
  hoverPanel: {
    backgroundColor: "rgba(0,0,0,.5)",
    display: "inline-flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    color: "white",
    borderRadius: "1em",
    position: "absolute",
    zIndex: 5,
    width: 200,
    heigh: 200,
    display: "block",
  },
  instaButtonWrapper: {
    alignSelf: "center",
    position: "absolute",
    bottom: 15,
  },
}

export default function InstaCard({ imgNode }) {
  const [hover, setHover] = React.useState(false)

  return (
    <div className={style.cardWrapper}>
      <div
        style={style.infoPanel}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={imgNode.preview}
          style={style.img}
          alt={`img ${imgNode.id}`}
        />
        <ImgHoverPanel hover={hover} imgNode={imgNode} />
      </div>
    </div>
  )
}

function ImgHoverPanel({ hover, imgNode }) {
  const URL = `https://www.instagram.com/p/${imgNode.id}/`
  return (
    <>
      {hover && (
        <div style={style.instaButtonWrapper}>
          <Link to={URL} className="button" target="_blank">
            Visit Post
          </Link>
        </div>
      )}
    </>
  )
}
