import React, { Fragment } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context/contexts";

const FilterProducts = () => {
  //get Unique Value
  const getUnique = (items, value) => {
    //jun items map garnu parne ani tesma hunu parne value
    //items[] bhitra vako value kasari taha hunxa by map
    return [...new Set(items.map(item => item[value]))];
    //hamle value ma vako item xa vane exclude xaina vane include
  };
  return (
    <Fragment>
      <ProductConsumer>
        {value => {
          const {
            search,
            price,
            min,
            max,
            company,
            storeProducts,
            shipping,
            handleChange
          } = value;

          //get unique types
          let companies = getUnique(storeProducts, "company"); // xaina vane matra rakhxa
          //add all
          companies = ["all", ...companies];

          return (
            <div className="row my-5">
              <div className="col-10 mx-auto">
                <FilterWrapper>
                  <div>
                    {/* text search */}
                    <label htmlFor="search">Search Products:</label>
                    <input
                      type="text"
                      name="search"
                      value={search}
                      onChange={handleChange}
                      className="filter-item"
                    />
                    {/* end of text search */}
                  </div>
                  <div>
                    {/* company select */}
                    <label htmlFor="company">Company:</label>
                    <select
                      name="company"
                      id="company"
                      value={company}
                      onChange={handleChange}
                      className="filter-item"
                    >
                      {companies.map((item, index) => {
                        return (
                          <option key={index}  value={item} >
                            {item}
                          </option>
                        );
                      })}
                    </select>
                    {/* end of company select */}
                  </div>
                  <div>
                    {/* price range */}
                    <label htmlFor="price">
                      <p>product price: Rs {price}</p>
                    </label>
                    <input
                      type="range"
                      name="price"
                      min={min}
                      max={max}
                      value={price}
                      onChange={handleChange}
                      className="filter-price mb-5"
                    />
                    {/* end of price range */}
                  </div>
                  <div>
                    {/* shipping checkbox */}
                    <label htmlFor="shipping" className="mx-2">
                      Free shipping
                    </label>
                    <input
                      type="checkbox"
                      name="shipping"
                      onChange={handleChange}
                      checked={shipping && true}
                    />
                    {/* end of shipping checkbox */}
                  </div>
                </FilterWrapper>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    </Fragment>
  );
};

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  label {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
    margin-bottom: 2rem;
  }
`;

export default FilterProducts;
