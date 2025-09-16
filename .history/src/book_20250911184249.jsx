function Book({ image, title, authors, link }) {
    return (
        <div className='book'>
            <img
                className='book__img'
                src={image}
                alt={title}
            />
            <h3 className='book__title'>{title}</h3>
            <p className='book__author'>{authors}</p>
            <a
                href={link}
                target='_blank'>
                Additional Information
            </a>
        </div>
    );
}

export default Book;
