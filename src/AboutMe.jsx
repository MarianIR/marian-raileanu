const AboutMe = () => {
  return (
    <section className="about-me-section">
      <article className="about-me-article">
        <h2 className="about-me-heading">About me</h2>
        <p className="about-me-paragraph">
          Hi! My name is Marian and I am 20 years old and I live in a village
          from Iasi, Romania. I like to work in a team, to motivate those around
          me to achieve a goal. I am always ready to learn new things, to meet
          new people and to be part of a community where I can evolve. As things
          of interest, I'm interested in motorsports, books, video games,
          geopolitics, history, environment protection and human rights.
        </p>
      </article>
      <div className="skills">
        <h2 className="skills-heading">Skills</h2>
        <ul className="skills-list">
          <li className="skill">HTML</li>
          <li className="skill">CSS</li>
          <li className="skill">SCSS</li>
          <li className="skill">JavaScript</li>
          <li className="skill">React JS</li>
          <li className="skill">Git & GitHub</li>
        </ul>
      </div>
    </section>
  );
};
export default AboutMe;
