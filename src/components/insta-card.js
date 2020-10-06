import React from "react"
import { Link } from "gatsby"
import { BsFillHeartFill } from "react-icons/bs"
import { FaCommentAlt } from "react-icons/fa"

const style = {
  cardWrapper: {
    width: "100%",
  },
  infoPanel: {
    height: 250,
    width: 250,
    borderRadius: "1em",
    position: "relative",
    margin: "0 auto",
  },
  img: {
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    borderRadius: "1em",
  },
  hoverPanel: {
    position: "absolute",
    zIndex: 1,
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,.5)",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    color: "white",
    borderRadius: "1em",
  },
  metaDataWrapper: {
    textAlign: "center",
    margin: "15px",
  },
  icon: {
    paddingRight: 15,
    width: 25,
    textAlign: "left",
    display: "inline-block",
  },
  metaText: {
    position: "relative",
    top: -5,
    display: "inline-block",
  },
  instaButtonWrapper: {
    alignSelf: "center",
    position: "absolute",
    bottom: 15,
  },
}

export default function InstaCard({ imgNode }) {
  const [hover, setHover] = React.useState(false)

  const URL = `https://www.instagram.com/p/${imgNode.id}/`

  return (
    <div className={style.cardWrapper}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={style.infoPanel}
      >
        <div
          style={{ ...style.img, backgroundImage: `url(${imgNode.preview})` }}
        ></div>
        {hover && (
          <div style={style.hoverPanel}>
            {!!imgNode.likes && (
              <div style={style.metaDataWrapper}>
                <span style={style.icon}>
                  <BsFillHeartFill />
                </span>
                <span style={style.metaText}>{imgNode.likes}</span>
              </div>
            )}
            {!!imgNode.comments && (
              <div style={style.metaDataWrapper}>
                <span style={style.icon}>
                  <FaCommentAlt />
                </span>
                <style style={style.metaText}>{imgNode.comments}</style>
              </div>
            )}
            <div style={style.instaButtonWrapper}>
              <Link to={URL} className="button" target="_blank">
                Visit Post
              </Link>
            </div>
          </div>
        )}
      </div>{" "}
    </div>
  )
}
