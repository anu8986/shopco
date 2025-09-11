import React from 'react'

const Brands = () => {
  const brands = [
    { name: "H&M", about: "Swedish fast-fashion retailer offering trendy, affordable clothing." },
    { name: "Mango", about: "Spanish fashion brand known for modern and stylish apparel." },
    { name: "Gucci", about: "Italian luxury fashion house famed for high-end clothing and accessories." },
    { name: "Prada", about: "Prestigious Italian brand offering designer bags, shoes, and apparel." },
    { name: "Chanel", about: "French luxury label renowned for timeless fashion and iconic fragrances." },
    { name: "Versace", about: "Bold Italian fashion brand famous for glamorous, statement designs." },
    { name: "Nike", about: "Global leader in sportswear and performance footwear." },
    { name: "Adidas", about: "German sportswear giant offering athletic apparel and sneakers." },
    { name: "Calvin Klein", about: "American brand known for minimalist, modern clothing and underwear." },
    { name: "Levi’s", about: "Iconic American denim brand celebrated for its classic jeans." },
    { name: "Armani", about: "Italian luxury label offering sophisticated clothing and accessories." }
  ];

  return (
    <div>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active p-3">
            <p className='brand-item'>Zara</p>
          </div>
          {brands.map((item, i) => (
            <div class="carousel-item">
              <ul className='brands-list'>
                <li className='brand-item' key={i}>{item.name}</li>
              </ul>
            </div>
          ))}
        </div>
        {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> */}
      </div>

    </div>
  )
}

export default Brands