class Api::SessionsController < ApplicationController
    def create
        # Logs in a user
        # find the user based off login info
            # If user exists, save the user info (why do we need to do user.save), log them in, and redirect to the show page
            # Else render errors
        # @
        # Utilize the built in params hash to access the user inputs
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user && @user.save
            log_in!(@user)
            render "api/users/show"
        else
            render json: ["Invalid Credentials"], status: 401
        end
    end

    def destroy
        # if user exists log them out and send them to the show page
        # else render error
        @user = current_user
        if @user 
            log_out!
            # consider adding this line if I want it to return empty @user = current_user
            render "api/users/show"
        else
            render json: ["Nobody logged in"], status: 404
        end
    end
end