class BoardsController < ApplicationController
	before_action :set_target_board,only: %i[show edit update]

  def index 
  	@boards = Board.order("RAND()").limit(13)
  end

  def new
  	@board = Board.new(flash[:board])
  end

  def create
  	board = Board.new(board_params)
  	if board.save
  		flash[:notice] = "「#{board.name}」のページを作成しました!"
  		session[:board_name] = board.name
  		redirect_to board
  	else
  		redirect_to :back, flash: {
  			board: board,
  			error_mesasges: board.errors.full_messages
  		}
  	end
  end

  def show
  	@board = Board.find(params[:id])
  	@comment = Comment.new(board_id: @board.id)
  end

  def edit 
  	@board = Board.find(params[:id])
  end

  def search
  	@boards = Board.page(params[:page]).per(7)
  end

  def me
  end

  def update
  	board = Board.find(params[:id])
  end

  private

  def set_target_board
  	@board = Board.find(params[:id])
  end

  def board_params
  	params.require(:board).permit(:name, :password, :password_confirmation)
  end
end
                                                                       

