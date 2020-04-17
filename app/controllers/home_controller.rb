class HomeController < ApplicationController
  def index
    if session[:board_id].nil?
      redirect_to action:'login'
    else
      @board = Board.find(session[:board_id])
    end
  end
  
  def login
  end
end
