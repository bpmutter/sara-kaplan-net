import React from "react"

const Footer = () => {
  const now = new Date()
  const thisYear = now.getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          © {thisYear} Sara Kaplan. Made by{" "}
          <a href="https://ben.perlmutter.io" target="_blank">
            Ben Perlmutter
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
