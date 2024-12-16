import "./Navbar.css";
function Navbar() {
  return (
    <>
      <section class="navigation">
        <header class="header">
          <div class="head office-info">
            <i class="fa-regular fa-location-pin"></i>
            <h4>Our Office</h4>
            <p>1234 Main Street, Anytown, CA 12345</p>
          </div>
          <div class="head email-info">
            <i class="fa-solid fa-envelope"></i>
            <h4>Email Us</h4>
            <p>info@dogcafee.com</p>
          </div>
          <div class="head phone-info">
            <i class="fa-regular fa-phone"></i>
            <h4>Call Us</h4>
            <p>123-456-7890</p>
          </div>
        </header>
        <nav class="main-nav">
          <h1>
            <i class="fa-solid fa-paw"></i> DOG Cafee
          </h1>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#product">Product</a>
            </li>
            <div class="dropdown">
              <button class="dropbtn">
                Page<i class="fa-solid fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">team</a>
                <a href="#">pricing-plan</a>
                <a href="#">instagram</a>
                <a href="#">youtube</a>
                <a href="#">facebook</a>
              </div>
            </div>
            <li>
              <a href="#contact">
                <button>Contact</button>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
export default Navbar;
