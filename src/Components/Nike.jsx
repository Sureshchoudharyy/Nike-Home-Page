function Nike(){
    return (
        <>
        <main className="nike container">
            <div className="nike-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex sequi veritatis ab in explicabo deserunt ratione facilis odio magnam cumque.</p>

                <div className="nike-button">
                    <button className="btn-b1">Shop Now</button>
                    <button className="btn-b2">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="shopping-icons">
                        <img src="/images/flipkart.png" alt="" />
                        <img src="/images/amazon.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="nike-image">
                <img src="/images/shoe_image.png" alt="" />
            </div>
        </main>
        </>
    );
}

export default Nike;