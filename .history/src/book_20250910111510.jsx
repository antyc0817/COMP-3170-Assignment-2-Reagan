function Book({ image, title, authors, link }) {
    return (
        <div className='book'>
            <img
                src={image}
                alt={title}
            />
            <h3>{title}</h3>
            <p>{authors}</p>
            <a
                href={link}
                target='_blank'>
                Additional Information
            </a>
        </div>
    );
}

export default Book;
