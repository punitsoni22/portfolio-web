import ContactUs from "./components/ContactUs";
import Learning from "./components/Learning";
import NavbarComponent from "./components/NavbarComponent";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <NavbarComponent />

      {/* Sections */}
      <main>
        <section id="home" style={{ padding: "50px", minHeight: "100vh" }}>
          <h1>Welcome to My Home Page</h1>
          <p>Scroll down to explore more sections!</p>
        </section>
        <Learning />
        <Projects />
        <ContactUs />
      </main>
    </>
  );
}
