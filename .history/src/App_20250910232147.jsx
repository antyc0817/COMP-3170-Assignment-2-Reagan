import "./App.css";
import Book from "./book.jsx";

function App() {
    return (
        <div id='app-container'>
            <header>
                <h1>Reagan Book Catalog</h1>
            </header>

            <main className='content'>
                <Book
                    image='https://itbook.store/img/books/9781593279561.png'
                    title='Bayesian Statistics the Fun Way'
                    authors='Will Kurt'
                    link='https://itbook.store/books/9781593279561'
                />
                <Book
                    image='https://itbook.store/img/books/9781718500259.png'
                    title='High-Tech LEGO Projects'
                    authors='Grady Koch'
                    link='https://itbook.store/books/9781718500259'
                />
                <button className='add-button'>+ Add</button>
                <button>Meow</button>
            </main>

            <footer>
                <p>© 2025 Reagan Book Catalog</p>
            </footer>
        </div>
    );
}

export default App;
