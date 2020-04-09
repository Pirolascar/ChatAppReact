
const initState = {
    user: "Robert",
    room: null,
    messages: [
        {
            content: 'Y a trop de trucs qui m\'enervent sur Terre',
            author: 'Robert',
            created_at: new Date()
        },{
            content: 'Les chomeurs sans travails, les orphelins sans pères',
            author: 'Amelie',
            created_at: new Date()
        },{
            content: 'Et tu parles fort',
            author: 'Robert',
            created_at: new Date()
        }
    ]
}

export const chat = function(state = initState, action) {

    switch(action.type) {
        case 'JOIN_REQUEST':
            return{
                ...state,
                user: action.user,
                room: action.room,
                error: null
            };

        case 'JOIN_SUCCESS':
            return {
                ...state,
                messages: action.messages,
                error: null
            };  

        case 'SEND_MESSAGE_SUCCESS':
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.message
                ]
            }
            
        case 'FAILURE':
            return {
                ...state,
                error: action.error
            };
    }

    return state;
}