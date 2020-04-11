class BoardsController < ApplicationController
	before_action :set_target_board, only: %i[show edit update destroy]

  def index 
  	@boards = Board.order("RAND()").limit(14)
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
  	@comment = Comment.new(board_id: @board.id)
  end

  def edit 
  end

  def search
  	@boards = Board.page(params[:page]).per(7)
  	@comment = Comment.all
  end

  def update
  	@board.update(board_params)

  	redirect_to board_path
  end

  def destroy
  	@board.delete

  	redirect_to board_path, flash: { notice: "「#{board.name}」のページが削除されました"} 
  end

  private

  def set_target_board
  	@board = Board.find(params[:id])
  end

  def board_params
  	params.require(:board).permit(:name, :password, :password_confirmation, :email, :profile)
  end
end