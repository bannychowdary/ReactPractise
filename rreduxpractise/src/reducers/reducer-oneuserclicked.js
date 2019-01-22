export default function oneUserClickedCapture(state=null, action){

    console.log("Received the action")
    console.log(action)
    switch (action.type) {
        case "ONE_USER_CLICKED":
            console.log("Action is received in reducer!")
            console.log(action.payload)
            return action.payload
           
        default:
            break;
    }

    return state


}