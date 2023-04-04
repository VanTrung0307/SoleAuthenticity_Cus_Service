// sm: md: lg: xl: 2xl:

function Newsletter() {
  return (
    <div className="container-letter">
      <div className="wrapContainer">
        <div className="title">
          <p>Subscribe to my newsletter.</p>

          <p>We post new articles every day.</p>
        </div>

        <div className="input-text">
          <input type="text" id="large-input" placeholder="Email address" />
          <p>SUBSCRIBE</p>
        </div>
      </div>
    </div>
  )
}

Newsletter.defaultProps = {}

export default Newsletter
