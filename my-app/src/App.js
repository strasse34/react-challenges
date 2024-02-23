import css from "./App.module.css";
import BookName from "./components/BookName";
import BooksInfo from "./components/BooksInfo";



function App() {
  return (
    <div className={css.App}>      
        <BookName />
        <BooksInfo />
      
    </div>
  );
}

export default App;
