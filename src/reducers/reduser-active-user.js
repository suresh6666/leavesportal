export default function(state = {}, action){
    switch(action.type){
        case "ADD_USER":
            return action.payload;
            break;
    }
    return state;
}