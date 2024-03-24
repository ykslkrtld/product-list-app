import { categories} from "../../helper/data";
import "./Header.scss"

function Header() {
  return (
    <>
      <div>
        <h1>Product List</h1>
      </div>
      <ul>
        {categories.map((category) => 
          <button key={category}>{category.toUpperCase()}</button>
        )}
      </ul>
    </>
  );
}

export default Header;