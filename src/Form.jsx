function HandingEvent(event){
    event.preventDefault;
    console.log("Form Was Submitted");
}



 export default function Form(){
    return(
        <div onSubmit={HandingEvent} >
            <input type="text" name="" id="" placeholder="Enter Name" />
            <button >Submit</button>
        </div>
    )
}


