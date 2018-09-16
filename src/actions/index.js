export const addUser = (text) => {
    console.log("***********************",text);
    return({
        type: 'ADD_USER',
        payload: text
    })
};