import "./About.css";
function About() {
  return (
    <>
      <section class="container1">
        <section class="about-us" id="about">
          <div class="about-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRumXh6stRmuDswZ35A4CIzGb_izxjNYjHPiQ&s"
              alt="Dog Cafee"
            />
          </div>
          <div class="about-text">
            <div class="about">
              <h2>About Us</h2>
              <h1> WE KEEP YOUR FURRIES HAPPY AT ALL TIME</h1>
            </div>
            <div class="about2">
              <p>
                A dog café is a type of business establishment where typically
                customers pay to spend time with domesticated canines for
                purposes of entertainment and relaxation. Such cafés may also
                provide other services such as food and beverages.
              </p>
              <button class="mission-btn" type="button" role="tab">
                Our Mission
              </button>
              <button class="vision-btn" type="button" role="tab">
                Our Vision
              </button>
              <p>
                Our mission is to provide the best possible care for your pet.
                During your visit to the cafe, you'll be entertained by their
                well-mannered in-house pets which you can cuddle and pamper. So
                if you're a pet-lover that aren't able to own any pets this is a
                great opportunity for you. The owner of the cafe also has a pet
                salon next door that offers grooming service.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
export default About;
