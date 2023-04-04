import Layout from '../layouts/Main'
import Link from 'next/link'
import Image from 'next/image'

const RegisterPage = () => (
  <Layout>
    <section className="form-page">
      <div className="container">
        <div className="back-button-section">
          <Link href="/products">
            <div>
              <a>
                <i className="icon-left"></i> Back to store
              </a>
            </div>
          </Link>
        </div>

        <div className="form-block">
          <h2 className="form-block__title_signup">
            Create an account and discover the benefits
          </h2>

          <form className="form">
            <div className="form__input-row">
              <input
                className="form__input"
                placeholder="First Name"
                type="text"
              />
            </div>

            <div className="form__input-row">
              <input
                className="form__input"
                placeholder="Last Name"
                type="text"
              />
            </div>

            <div className="form__input-row">
              <input className="form__input" placeholder="Email" type="text" />
            </div>

            <div className="form__input-row">
              <input
                className="form__input"
                type="Password"
                placeholder="Password"
              />
            </div>

            <div className="form__info">
              <div className="checkbox-wrapper">
                <label
                  htmlFor="check-signed-in"
                  className={`checkbox checkbox--sm`}
                >
                  <input
                    name="signed-in"
                    type="checkbox"
                    id="check-signed-in"
                  />
                  <span className="checkbox__check"></span>
                  <p>
                    I agree to the Google Terms of Service and Privacy Policy
                  </p>
                </label>
              </div>
            </div>

            <button
              type="button"
              className="btn btn--rounded btn--yellow btn-submit"
            >
              Sign up
            </button>

            <p className="form__signup-link">
              <Link href="/login">
                <a href="#">Are you already a member?</a>
              </Link>
            </p>
          </form>

          <Image
            src="/images/sneakerbox.gif"
            alt="Jordan"
            width={400}
            height={400}
            layout="fixed"
            objectFit="cover"
            objectPosition="-500px -600px"
          />

          <Image
            src="/images/sneaker.gif"
            alt="Jordan"
            width={400}
            height={400}
            layout="fixed"
            objectFit="cover"
            objectPosition="550px -600px"
          />
        </div>
      </div>
    </section>
  </Layout>
)

export default RegisterPage
