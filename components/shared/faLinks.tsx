function faLinks() {
    return (
        <div className="flex items-center justify-center mt-6 space-x-4">
            <a
                href="https://www.facebook.com/heavenagency0?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-1 hover:text-blue transition duration-200"
                aria-label="Facebook"
            >
                <i className="fab fa-facebook fa-x"></i>
            </a>
            <a
                href="https://www.instagram.com/heavenagency.eg?igsh=ajlqbTBoM2Q0dGdt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-1 hover:text-pink-500 transition duration-200"
                aria-label="Instagram"
            >
                <i className="fab fa-instagram fa-x"></i>
            </a>
            <a
                href="https://www.behance.net/heavenagency2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-1 hover:text-black transition duration-200"
                aria-label="Twitter"
            >
                <i className="fa-brands fa-behance"></i>
            </a>
        </div>
    )
}

export default faLinks