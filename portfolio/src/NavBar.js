function NavBar() {
  return (
    <div className="px-2">
      <header className="flex flex-col items-start text-3xl">
        <div className="text-lg	inline-flex px-20 py-2 min-w-full text-berry">
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
