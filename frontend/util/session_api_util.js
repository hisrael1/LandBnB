// Ajax reqs
// signup
// login
// logout

// create some function to export to actions
// these function will send the fontend login state changes to the database

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
