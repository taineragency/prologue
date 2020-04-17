class SessionsController < ApplicationController
  def create
    board = Board.find_or_create_from_auth(request.env['omniauth.auth'])
    session[:board_id] = board.id
    redirect_to root_path
  end

  def destroy
    reset_session
    redirect_to root_path
  end 
end