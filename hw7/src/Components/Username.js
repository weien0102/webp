const username = () => {
    var output = <div><img src={require('./Username_Image.png')} class="Username_Image" />
        <input class="username" onChange={(usertext) => { console.log(usertext.target.value) }}></input></div>

    return output;
}

export default username;