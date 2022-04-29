class Api::UsersController < ApplicationController
    # this is the sign up form
    def create
        @user = User.new(user_params)

        # anything wrong with writing save and log in on the same line
        if @user.save && log_in!(@user)
            render "api/users/show"
        else
            render json: @user.errors, status: 422
        end
    end

    # why did we need to make this private?
    private

    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name)
    end
end