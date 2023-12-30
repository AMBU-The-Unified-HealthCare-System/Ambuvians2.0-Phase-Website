
import "./JobSearchComponent.css"


const SearchBar = ()=> {
  return (
    <>
    <div className="left">
    <p className="label">
        Seeking an internship at Ambuvians?
        </p>
    <div className="search-bar">
        
      <header className="search-bar__header">
        <img
          className="search-bar__header-image"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/340c85e43889c80a2a6a9b1761bbae8632478f9a193aceaaf5fcaea1378647e4?apiKey=052693730d024b73b5367ca01ded0a96&"
          alt="Logo"
        />
        <div className="search-bar__header-text">Job title, Keyword...</div>
      </header>
      <form className="search-bar__form">
        <input className="search-bar__input" type="text" aria-label="Search" />
        <button className="search-bar__button" type="submit">
          Search
        </button>
      </form>
    
    </div>
    </div>
    </>
  );
}
export default SearchBar;