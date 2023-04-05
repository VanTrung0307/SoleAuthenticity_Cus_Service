// sm: md: lg: xl: 2xl:

function Newsletter() {
  return (
    <div className="container-letter">
      <div className="wrapContainer">
        <div className="title">
          <p>Theo dõi bản tin của tôi.</p>

          <p>Chúng tôi đăng bài viết mới mỗi ngày.</p>
        </div>

        <div className="input-text">
          <input type="text" id="large-input" placeholder="Địa chỉ Email" />
          <p>Đăng kí</p>
        </div>
      </div>
    </div>
  )
}

Newsletter.defaultProps = {}

export default Newsletter
