import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import MenuProducts_27 from "../../components/MenuProducts_27";

const base_url = `https://xuwztydqqoyqwrjsgfbd.supabase.co/rest/v1/menu_xx?select=*`;

let url = `${base_url}`;

const options = {
    method: 'GET',
            headers: {
                apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1d3p0eWRxcW95cXdyanNnZmJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTkzMzksImV4cCI6MTk5MjAzNTMzOX0.UybPjwFsZW8XDJUPnjwYl7zSpdRjKeP0lMmenfBdCfQ`,
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1d3p0eWRxcW95cXdyanNnZmJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTkzMzksImV4cCI6MTk5MjAzNTMzOX0.UybPjwFsZW8XDJUPnjwYl7zSpdRjKeP0lMmenfBdCfQ`
            }
        
};

const MenuByCategoryPage_27 = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('all');
    const params = useParams();
    console.log('params category', params.category);

    const navigate = useNavigate();

    const changeFilter = (category) => {
        console.log('category', category);
        setCategory(category);
        // navigate(`/supa_menu_27/${filter}`);
       // window.location.href = `/supa_menu_27/${filter}`;
    }

    const getMenuDataByCategory_27 = async () => {

        if(params.category === 'all'){
            url = `${base_url}`;
        }else{
            url = `${base_url}&category=eq.${params.category}`;
        }
        const response = await fetch(url, options);
        const data = await response.json();
        console.log('menu data ', data);
        setProducts(data);
        
    }


    useEffect(() => {
        getMenuDataByCategory_27();
    }, [category]);


    return (
        <section>
            <div className="btn-container"></div>
            <div className="section-center">
                <section className="menu">
                    <div className="title">
                        <h2>menu - Supabase, 210417027</h2>
                        <div className="underline"></div>
                    </div>
                    <div className="btn-container">
                        <button type="button" className="filter-btn" data-id="all" onClick={() => { changeFilter();
                        return navigate(`/supa_menu_27/all`); }}>all</button><button type="button" className="filter-btn"
                            data-id="breakfast" onClick={() => { changeFilter('breakfast');return navigate(`/supa_menu_27/breakfast`); }}>
                            breakfast</button><button type="button" className="filter-btn" data-id="lunch" onClick={() => { changeFilter('lunch');return navigate(`/supa_menu_27/lunch`); }}>
                            lunch</button><button type="button" className="filter-btn" data-id="dessert" onClick={() => { changeFilter('dessert'); return navigate(`/supa_menu_27/dessert`);}}>
                            dessert</button><button type="button" className="filter-btn" data-id="shakes" onClick={() => { changeFilter('shakes'); return navigate(`/supa_menu_27/shakes`);}}>
                            shakes
                        </button>
                    </div>
                    <MenuProducts_27 products={products}/>

                </section>
            </div>
        </section>
    );
}

export default MenuByCategoryPage_27;
