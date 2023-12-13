function NavBar() {
  return (
    <div>
      <header className="flex flex-col items-start text-3xl">
        <div className="font-medium	inline-flex px-20 py-8 min-w-full text-berry">
          <a
            className="hover:underline"
            href="./"
            target="_blank"
            rel="noopener noreferrer"
          >
            cmh
          </a>
          <a 
            className="ml-auto hover:underline"
            href="mailto: christinemhorvath@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            contact
          </a>
        </div>
      </header>
      
    </div>
  );
}

export default NavBar;
