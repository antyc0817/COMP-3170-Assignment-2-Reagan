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
                    image='https://itbook.store/img/books/9781492055020.png'
                    title='Learning React'
                    authors='Alex Banks & Eve Porcello'
                    link='https://itbook.store/books/9781492055020'
                />
                <Book
                    image='https://itbook.store/img/books/9781492071653.png'
                    title='React Quickly'
                    authors='Azat Mardan'
                    link='https://itbook.store/books/9781492071653'
                />
                <div className='add-button'>+ Add</div>
            </main>

            <footer>
                <p>© 2025 Reagan Book Catalog</p>
            </footer>
        </div>
    );
}

export default App;
