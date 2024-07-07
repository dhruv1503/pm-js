const getItemsFromLocalStorage = (label) => {
    const item = localStorage.getItem(label);
    if(item){
        return item.split("")[0] === "[" || item.split("")[0] === "{" ? JSON.parse(item) : item 
    }
    return null
    }
    
    const setObjectIntoLocalStorage = (label, object ) => {
        localStorage.setItem(label, JSON.stringify(object));
    }
    
    const setPrimativeValueInLocalStorage = (label, input) => {
            localStorage.setItem(label, input.toString())
    }
    
    export {getItemsFromLocalStorage, setObjectIntoLocalStorage, setPrimativeValueInLocalStorage}