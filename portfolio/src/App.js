import "./App.css";

function NavBar() {
  return (
    <div>
      <header className="flex flex-col items-start min-h-screen text-3xl bg-light-pink">
        <div className="inline-flex mx-8 my-8 min-w-full">
          <a
            className="text-berry"
            href="./"
            target="_blank"
            rel="noopener noreferrer"
          >
            cmh
          </a>
          <section className="justify-items-end">
              contact
          </section>
        </div>
      </header>
      
    </div>
  );
}

export default NavBar;
