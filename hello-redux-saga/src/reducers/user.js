const initialState = {
    isFetching:false,
    user:null,
    error:null
};

//action{type:'',payload:''} payload可以自定义, 此处为user
const user = (state=initialState, action={})=>{
    switch (action.type){
        case "FETCH_USER_REQUEST":
            return {
                isFetching:true,
                user:null,
                error:null
            };
        case "FETCH_USER_SUCCESS":
            return {
                isFetching:false,
                user: action.user,
                error:null
            };
        case "FETCH_USER_ERROR":
            return {
                isFetching:false,
                user:null,
                error:action.error
            };
        default:return state;
    }
};

export default user;