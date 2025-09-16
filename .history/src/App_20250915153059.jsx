import "./App.css";
import Book from "./book.jsx";
import data from "../data/books.json";

console.log(data);

function App() {
    return (
        <div id='app-container'>
            <header>
                <h1>Reagan Book Catalog</h1>
            </header>

            <main className='content'>
                {data.map((book) => (
                    <Book
                        image={book.image}
                        title={book.title}
                        authors={book.authors}
                        link={book.url}
                    />
                ))}
                <button className='add-button'>+ Add</button>
            </main>

            <footer>
                <p>© 2025 Reagan Book Catalog</p>
            </footer>
        </div>
    );
}

export default App;
