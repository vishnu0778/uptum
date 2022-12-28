import React, { useState } from "react";
import thumbail from '../images/pcpIcon.svg'
import data from '../data/search.json'

export default function Main() {
    const [inputItem, setInputItem] = useState("")
    
    function inputValue(e){
        setInputItem(e.target.value)
    }

    const [search, setSearch] =useState(false);

    function searchFun(){
        setSearch(true)
    }    


    

console.log(data, 'data')
return <>
        <section className="mt-5">
            <div className="heading">
                <h3>Who are you looking for?</h3>
            </div>
            <div className="search-section">
               <div className="container">
               <div className="input-btn">
                    <input placeholder="search.."  onChange={inputValue} />
                    <button className="btn bg-primary text-white" onClick={searchFun}>Search</button>
                    <select className="bg-secondary btn text-white">
                        <option>Sort by</option>
                        <option name="atoz">A to Z</option>
                        <option name="ztoa">Z to A</option>
                    </select>
                </div>
               </div>
            </div>
            <div className="details-list">
                <div className="container">

                {data.filter(vals => {
                    if(search ===  true || vals.name.toLowerCase(inputItem) ){
                      
                         return vals.name.includes(inputItem)
                         
                    }
                    else{
                        return vals 
                    }
                }).map((items, key)=>{
                    return <>
                    <div className="row pt-4 pb-4" key={key}>
                        <div className="col-md-5">
                        <div className="details">
                                <img src={thumbail} />
                                <div className="details-name">
                                    <h3>{items.name}</h3>
                                    <p>{items.speciality}</p>
                                    <p>{items.providerType}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                           <div className="address">
                                <p>{items.address.address1}</p>
                                <p>{items.address.address2}</p>
                                <p>{items.phone}</p>
                           </div>
                        </div>
                        <div className="col-md-2">
                            <div className="see-more">
                                <button>See More</button>
                            </div>
                        </div>
                    </div>
                    </>
                })} 
                </div>
            </div>
        </section>
  </>
};


