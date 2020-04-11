class SessionsController < ApplicationController
  def create
    board = Board.find_by(name: params[:session][:name])
    if board && board.authenticate(params[:session][:password])
      session[:board_id] = board.id
      redirect_to mypage_path
    else
      render 'boards/login'
    end
  end

  def destroy
    session.delete(:board_name)
    redirect_to boards_path
  end
end