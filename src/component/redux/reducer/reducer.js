
let initialState={
    contactList:[],
    filterName:""
};


function reducer(state=initialState,action){
    switch(action.type){
        case "userInfo":
            return{...state,contactList:[...state.contactList,{name:action.payLoad.name,number:action.payLoad.number}]};
        case "search":
            return{...state,filterName:action.payLoad}
        default:
            return{...state};
    }
    
}

export default reducer;