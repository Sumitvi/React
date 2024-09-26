

function doSomething(){
    console.log("Button Was Clicked!!");
    alert("Hello Sumit")
}

function onMouse(){
    console.log("Hover");
}

export default function Button(){
    return(
        <div>
            {/* <button onClick={doSomething}>Click Me!</button> */}
            <button onMouseOver={onMouse}>Click Me!</button>
            
        </div>
    )
}

