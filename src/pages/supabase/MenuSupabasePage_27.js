import { useState, useEffect } from "react";
import MenuProducts_27 from "../../components/MenuProducts_27";


const base_url = `https://xuwztydqqoyqwrjsgfbd.supabase.co/rest/v1/menu_xx?select=*`;

let url = `${base_url}`;

const options = {
    method: 'GET',
            headers: {
                apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1d3p0eWRxcW95cXdyanNnZmJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYxMzgwMDUsImV4cCI6MjAwMTcxNDAwNX0.gJO9ES3nG7Ze9llAWRDQb3va0li7Hzmo-1rcBmtah9Y`,
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1d3p0eWRxcW95cXdyanNnZmJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYxMzgwMDUsImV4cCI6MjAwMTcxNDAwNX0.gJO9ES3nG7Ze9llAWRDQb3va0li7Hzmo-1rcBmtah9Y`
            }
        
};



const MenuSupabasePage_27 = () => {
    const [products, setProducts] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [searchName2, setSearchName2] = useState('');
    
    // const params = useParams();
    // console.log('params category', params.category);

    

    useEffect(() => {
        // 在這個 useEffect 中篩選產品，使用 searchName 的值
        const filterProducts = products.filter((product) => {
            return product.title.toLowerCase().includes(searchName.toLowerCase());
        });
        setProducts(filterProducts);
    }, [searchName]);

      useEffect(() => {
        const filterMeets = products.filter( (product) => {
          return product.chinese.toLowerCase().includes(searchName2.toLowerCase());
        });
        setProducts(filterMeets);
      } , [searchName2]);

      const handleSubmit = async (e) => {
        e.preventDefault();
        // 在這裡添加搜索邏輯
        try {
            const response = await fetch(url, options);
            if (response.ok) {
              const data = await response.json();
              setProducts(data);
            } else {
              console.error('搜索请求失败');
            }
          } catch (error) {
            console.error('搜索请求出错', error);
          }
          
        const filterProducts = products.filter((product) => {
            return product.title.toLowerCase().includes(searchName.toLowerCase());
        });
        setProducts(filterProducts);
    };
      

    const changeFilter = (filter) => {
        if(filter === 'all'){
            url = `${base_url}`;
        }else{
            url = `${base_url}&category=eq.${filter}`;
        }
        getMenuData(filter);
        }

    const getMenuData = async (filter = 'all') => {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(`${filter} data`, data);
        
        if (Array.isArray(data)) {
            setProducts(data); // 只有當 data 是陣列時才設定狀態
        } else {
            console.error("API 回傳的不是陣列");
        }
    }


    useEffect(() => {
        getMenuData();
    }, []);


    return (
      
        <section className="all">
          
            <form onSubmit={handleSubmit}>

            <div className="btn-container"></div>
            <div className="section-center">
                <section className="menu">
                    <div className="title">
                        <h2>English Menu</h2>
                        <div className="underline"></div>
                        <div className="search">
        <input
                type="text"
                value={searchName}
                onChange={ (e) => {
                  setSearchName(e.target.value)
                }}
                className="search-input"
                placeholder="搜尋想點的東西..."
              />
              {/* 清除搜索按鈕 */}
        </div>
        <div className="search2">
        <input
                type="text"
                value={searchName2}
                onChange={ (e) => {
                  setSearchName2(e.target.value)
                }}
                className="search2-input"
                placeholder="搜尋原肉or重塑肉"
              />
              {/* 清除搜索按鈕 */}
        </div>
        
                    </div>
                    <div className="btn-container">
                        <button type="button" className="filter-btn" data-id="all" onClick={() => { changeFilter('all'); }}>all</button>
                        <button type="button" className="filter-btn"
                            data-id="hotpot" onClick={() => { changeFilter('HotPot'); }}>
                            HotPot</button>
                            <button type="button" className="filter-btn" data-id="sideMeal" onClick={() => { changeFilter('sideMeal'); }}>
                            sideMeal</button>
                            <button type="button" className="filter-btn" data-id="else" onClick={() => { changeFilter('else'); }}>
                            else</button>
                        
                    </div>
                   <MenuProducts_27 products={products}/>
                  <a href="/supa_cart_27" class="submit">
                    <button type="button" className="menu-right">結帳點我</button>
                  </a>
                </section>
            </div>
            </form>
        </section>
    );
}

export default MenuSupabasePage_27;
