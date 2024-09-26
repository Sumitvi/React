export default function MsgBox({username,textColor}){


    let style = {color: textColor}
    return(
        <div style={style}>
            <h1>Hello , {username}</h1>
          
        </div>
    )
}


