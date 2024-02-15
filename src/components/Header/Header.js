import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <h1>React & Javascript Optimization Techniques</h1>
        <br></br>
        <section class="info">
          <img
            src="https://cdn.icon-icons.com/icons2/1875/PNG/512/usercircle_120225.png"
            alt="Creador del post"
            class="creador"
          />
          <div class="info2">
            <div class="name">
              <span> Rafael Rojas </span>
              <span> · </span>
              <span>
                <a href="https://medium.com/m/signin">Follow </a>
              </span>
            </div>
            <div class="published">
              <span>
                Published in <a href="https://medium.com/globant">Globant</a>
              </span>
              <span> · </span>
              <span> 21 min read </span>
              <span> · </span>
              <span> Jan 16, 2024 </span>
            </div>
          </div>
        </section>
      </header>
      <br></br>
    </>
  );
}

export default Header;
