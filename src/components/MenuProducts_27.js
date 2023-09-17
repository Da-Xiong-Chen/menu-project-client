import React from 'react';

const MenuProducts_27 = ({products}) => {
    return(
        <div className="section-center">
          {products.map((product) => {
            const { id, title, img, price, descrip, chinese } = product;
            return (
              <article className="menu-item" key={id}>
                <img src={img} alt="eggs" className="photo" />
                                    <div className="item-info">
                                        <header>
                                            <h4>{title}</h4>
                                            <h4 className="price">${price}</h4>
                                        </header>
                                        <p className="item-text">
                                            {descrip}
                                            <h4>{chinese}</h4>
                                        </p>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
    )
}

export default MenuProducts_27;