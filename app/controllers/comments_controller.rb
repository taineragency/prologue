class CommentsController < ApplicationController
  def create
  	comment = Comment.new(comment_params)
  	if comment.save
  		redirect_to comment.board
  	else
  		redirect_to :back, flash: {
  			comment: comment,
  			error_mesasges: comment.errors.full_messages
  		}
  	end
  end

  def destroy
  end

  private

  def comment_params
  	params.require(:comment).permit(:board_name, :name, :comment)
  end
end
