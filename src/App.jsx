import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  return (
    <>
    <nav className="flex justify-center items-center p-10 bg-white shadow">
      <div className="flex flex-center sm:flex-row gap-4">
    <section id="AboutMe"></section><button className="px-6 py-3 w-auto bg-pink-300 text-white rounded-lg hover:bg-black transition duration-300">
    About Me
    </button>
    <button className="px-6 py-3 w-auto bg-pink-300 text-white rounded-lg hover:bg-black transition duration-300">
    Education
    </button>
    <button className="px-6 py-3 w-auto bg-pink-300 text-white rounded-lg hover:bg-black transition duration-300">
    Experience
    </button>
    <button className="px-6 py-3 w-auto bg-pink-300 text-white rounded-lg hover:bg-black transition duration-300">
    Skills
    </button>
    <button className="px-6 py-3 w-auto bg-pink-300 text-white rounded-lg hover:bg-black transition duration-300">
    Contact
    </button>
      </div>
    </nav>

      <section className="h-screen flex flex-col justify-center items-center bg-pink-white text-black text-center">
        <h1 className="text-5xl font-bold">Hi, I'm Jonelle.</h1>
        <p className="mt-4 text-lg">I build apps and I love pink.</p>
        <a href="#experience" className="mt-4 px-6 py-3 text-white bg-pink-300 hover:bg-black rounded-full transition w-full sm:w-auto">
          View My Works
        </a>
      </section>

      <main className="max-w-6xl mx-auto p-2">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;