import { useState, useEffect } from "react";
import MenuProducts_27 from "../../components/MenuProducts_27";

const base_url = `http://localhost:5000/api/node_menu_27`;

let url = `${base_url}`;

const MenuNodePage_27 = () => {
    const [products, setProducts] = useState([]);
    // const params = useParams();
    // console.log('params category', params.category);


    const changeFilter = (filter) => {
        if(filter === 'all'){
            url = `${base_url}`;
        }else{
            url = `${base_url}&category=eq.${filter}`;
        }
        getMenuData(filter);
        }

    const getMenuData = async (filter = 'all') => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(`${filter} data`, data);
        setProducts(data);
    }


    useEffect(() => {
        getMenuData();
    }, []);


    return (
        <section>
            <div className="btn-container"></div>
            <div className="section-center">
                <section className="menu">
                    <div className="title">
                        <h2>menu from Node Server, 210417027</h2>
                        <div className="underline"></div>
                    </div>
                    <div className="btn-container">
                        <button type="button" className="filter-btn" data-id="all" onClick={() => { changeFilter('all'); }}>all</button><button type="button" className="filter-btn"
                            data-id="breakfast" onClick={() => { changeFilter('breakfast'); }}>
                            breakfast</button><button type="button" className="filter-btn" data-id="lunch" onClick={() => { changeFilter('lunch'); }}>
                            lunch</button><button type="button" className="filter-btn" data-id="dessert" onClick={() => { changeFilter('dessert'); }}>
                            dessert</button><button type="button" className="filter-btn" data-id="shakes" onClick={() => { changeFilter('shakes'); }}>
                            shakes
                        </button>
                    </div>
                   <MenuProducts_27 products={products}/>
                </section>
            </div>
        </section>
    );
}

export default MenuNodePage_27;
