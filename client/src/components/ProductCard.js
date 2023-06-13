function ProductCard(props) {
    return (
        <>
            <div className="card col-3 m-3" style={{ width: "18rem" }}>
                <img src={props.imgUrl || "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Product Name</h5>
                    <div className="shop-name" style={{ color: "grey", fontSize: "15px", paddingBottom: ".5rem" }}>Variety Super Store</div>
                    <p className="card-text">Some quick example text to build on the...</p>
                    <div className="price" style={{ fontSize: "1rem", fontWeight: 700, paddingBottom: "1rem" }}>Rs. 100</div>
                    <a href="/" className="btn btn-primary">More Details</a>
                    <a href="/" className="btn btn-warning">Add To Cart</a>
                </div>
            </div>
        </>
    );
}

export default ProductCard;