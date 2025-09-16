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
                <button className='add-button'>+ Add</button>
                <div className='books-container'>
                    {data.map((book) => (
                        <Book
                            image={book.image}
                            title={book.title}
                            price={book.price}
                            link={book.url}
                        />
                    ))}
                </div>
            </main>

            <footer>
                <p>© 2025 Reagan Book Catalog</p>
            </footer>
        </div>
    );
}

export default App;
