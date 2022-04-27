import aboutLanding from '../images/about-landing.png'

const About = () => {
  return (
    <div className="about">
      <img id="about-img" src={aboutLanding} />

      <div className="about-blurb">
        <p>
          Yelp Guesser is a guessing game inspired by GeoGuessr. It was created
          with the Yelp Fusion API, PostgreSQLs, Expres, React, and NodeJs. It
          was created by Nick Lopez, Brad Lewis, and Mily Wendland during their
          Software Engineering Immersive at General Assembly in April, 2022.
        </p>
      </div>
      <div className="dev-wrapper">
        <div className="dev-card1">
          <img
            src="https://avatars.githubusercontent.com/u/98563678?v=4"
            alt="Nick Lopez"
          ></img>
          <h3 className="dev-name">Nick Lopez</h3>
          <a href="https://github.com/nicklope">Check out Nick's Github</a>
        </div>

        <div className="dev-card2">
          <img
            src="https://avatars.githubusercontent.com/u/91275413?v=4"
            alt="Brad and his cat Pancake"
          ></img>
          <h3 className="dev-name">Brad Lewis</h3>
          <a href="https://github.com/BLewis739">Check out Brad's Github</a>
        </div>

        <div className="dev-card3">
          <img
            src="https://64.media.tumblr.com/8d7983694a96750d4d02d972a3e2a34e/1ed6c09361f8ddf1-12/s540x810/9d3cc5cb10b317d35167ad99ca912ba24f9efd87.jpg"
            alt="Mily"
          ></img>
          <h3 className="dev-name">Mily Wendland</h3>
          <a href="https://github.com/milywendland">Check out Mily's Github</a>
        </div>
      </div>
    </div>
  )
}

export default About
