let myImports = [];

function loadScript(url, callback = undefined) {
    console.log(typeof(url));
    switch (typeof(url)) {
        case 'string':
            if (myImports.find((el)=>{return (url == el)})) {
                console.log(`duplicate ${url}`);
                return;  
            } 
            createScryptByUrl(url, callback); 
            myImports.push(url);
            break;
        case 'object':
            for (key in url) {
                
                if (myImports.find((el)=>{
                    return (el == url[key]);
                    })) {
                    console.log(`duplicate ${url[key]}`);
                    continue;   
                } 
                createScryptByUrl(url[key], callback); 
                myImports.push(url[key]); 
            }
            break;
        case 'function':
            url.call(undefined);
            break;        
                
    }
    
}

function createScryptByUrl (url, callback) {
    const scrypt = document.createElement("script");
    scrypt.type = "text/javascript";
    scrypt.src = url;
    scrypt.onload = callback;

    document.body.appendChild(scrypt);
}

loadScript('./common.js', ()=>{
    console.log('load common.js');
}); 

loadScript(['./common.js', './utils.js'], ()=>{
    console.log('loaded url from array');     
});

loadScript(()=>{
    console.log('executed callback');     
});