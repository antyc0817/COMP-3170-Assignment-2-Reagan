function Book({ image, title, authors, link }) {
    return (
        <div className='book'>
            <img
                src={image}
                alt={title}
            />
            <h2>{title}</h2>
            <p>{authors}</p>
            <a
                href={link}
                target='_blank'>
                Details
            </a>
        </div>
    );
}

export default Book;
