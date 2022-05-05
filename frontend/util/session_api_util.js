// create ajax requests to send the inputted data 


// signup
// login
// logout

// this function takes in a user and sends all the input data to the backend
export const signup = user => (
    $.ajax({
        method: "POST",
        url: '/api/user',
        data: { user }
    })
);

export const login = user => (
    $.ajax({
        method: "POST",
        url: '/api/session',
        data: { user }
    })
);

export const logout = () => (
    $.ajax({
        method: "DELETE",
        url: '/api/session'
    })
)
