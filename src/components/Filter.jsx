import '../styles/filter.css'
import htmlData from '../json/htmlData.json'
import { useState } from 'react'
import Header from './Header';
import Nav from './Nav';

function ProductCategoryRow({category}) {
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    )
}
function ProductRow({product}) {
    const name = product.stocked ? product.name : 
    <span style={{color:"red"}}>
        {product.name}
    </span>;

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}
function ProductTable({ products, filterText, inStockOnly }) {
    const rows=[];
    let lastCategory = null;

    products.forEach((product) => {
        // product.name 과 filter input 검색 소문자 비교 체크
        // 검색어와 일치하지않는다면 리턴값 x
        if (
            product.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1
        ) {
            return;
        }
        // checkbox 유무 체크
        // checkbox 값이 있거나 stocked 값이 false라면 리턴값 x 
        if(inStockOnly && !product.stocked) {
            return;
        }
        if(product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            );
        }
        rows.push(
            <ProductRow 
                product={product}
                key={product.name} />
        );
        lastCategory = product.category;
    });

    return (
        <table className="filter_table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function SearchBar({ 
    filterText, 
    inStockOnly, 
    onFilterTextChange, 
    onInStockOnlyChange 
}) {
    return (
        <form className="filter_form">
            <input 
                type="text" 
                className="filter_text" 
                value={filterText} 
                placeholder="Search..." 
                onChange={(e) => onFilterTextChange(e.target.value)}/>
            <label>
                <input 
                    type="checkbox" 
                    className="filter_checkbox" 
                    checked={inStockOnly} 
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}/>
                {' '}
                Only show products in stock 
            </label>
        </form>
    );
}

function FilterableProductTable({ products }) {
    const [ filterText, setFilterText ] = useState('');
    const [ inStockOnly, setInStockOnly ] = useState(false); 

    return (
    <div className="filter_content">
        <SearchBar 
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={setFilterText}
            onInStockOnlyChange={setInStockOnly} />
        <ProductTable 
            products={products}
            filterText={filterText}
            inStockOnly={inStockOnly} />
    </div>
    );
}

function Filter() {
    return (
        <>
            <Header />
            <Nav />
            <div className="filter_wrap">
                <FilterableProductTable products={htmlData}/>
            </div>
        </>
    );
}

export default Filter;