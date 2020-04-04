class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :current_user

  private

  def current_user
    return unless session[:board_name]
    @current_user = Board.find_by(name: session[:board_name])
  end
end