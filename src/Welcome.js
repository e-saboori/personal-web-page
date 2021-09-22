import ProfilePic from "./asset/ProfilePicture.jpg";
import LinkedinLogo from "./asset/Linkedin.svg";
import GithubLogo from "./asset/Github.svg";
import InstagramLogo from "./asset/Instagram.svg";

const Welcome = () => {
  return (
    <div>
      <div className="container">
        <img className="profile-img" src={ProfilePic} alt="Profile" />
        <section className="information">
          <h1>Elham Saboori</h1>
          <p>
            Software Developer <span> @Morgan Stanley </span>
          </p>
          <p>
            Former Programer <span> @TRU Simulation + Training </span>
          </p>
          <div className="link-icon">
            <a href="https://www.linkedin.com/in/elham-saboori-a8327582/">
              <img src={LinkedinLogo} alt="Linkedin Logo" />
            </a>
            <a href="https://github.com/e-saboori">
              <img src={GithubLogo} alt="Github Logo" />
            </a>
            <a href="https://www.instagram.com/_this_is_elli_/">
              <img src={InstagramLogo} alt="Instagram Logo" />
            </a>
          </div>
        </section>
      </div>

      <div className="about">
        <h3>About Me</h3>
        <hr className="separation" />
        <p className="description">
          Hello and welcome to my page! My name is Elham and I'm a software
          developer at Morgan Stanley. My main stack is C# and .Net Framework.
          I'm on a journey of learning new things everyday, coding is one of
          them. I also love reading books, watercolor, hiking, sking and try new
          things!
        </p>
      </div>
    </div>
  );
};

export default Welcome;
