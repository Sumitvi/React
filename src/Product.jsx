function Product({title,price,features}){

    // let list = features.map((options)=> <li>{options}</li>)

    let style = {backgroundColor: price>50000 ? "yellow" : ""}
    return(

        
        <div className="Product" style={style}> 
            
            <h3>{title}</h3>
            
            <h5>{price}</h5>
           {price>50000 ? <p>"Discount of 5 %"</p> : null}
            
        </div>
    )
}


export {Product};