body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
}

header {
    background-color: #4CAF50;
    color: white;
    padding: 15px;
    text-align: center;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
}

.product {
    width: 30%;
    margin: 10px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: white;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.product:hover {
    transform: scale(1.05);
}

.product img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
}

.product h3 {
    margin: 10px 0;
}

.product p {
    color: #555;
}

.product button {
    padding: 10px 20px;
    color: white;
    background-color: #4CAF50;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.product button:hover {
    background-color: #45a049;
}

footer {
    text-align: center;
    padding: 10px;
    background-color: #ddd;
    margin-top: 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .product {
        width: 100%;
    }
}
