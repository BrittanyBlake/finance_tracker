class StocksController < ApplicationController

  def search
     if params[:stock].present?
      @stock = Stock.new_lookup(params[:stock])
        if @stock
          respond_to do |format|
            format.html { redirect_to my_portfolio_path} 
           format.js { render partial: 'users/result'}

         end
        else
          flash[:alert] = "Something is wronggggg"
        end
      end
    end
  end
         
         
    #     else
    #       flash[:alert] = "Please enter a valid stock symbol"
    #       redirect_to my_portfolio_path
    #     end
    #  else
    #   flash[:alert] = "Please enter a valid stock symbol"
    #   redirect_to my_portfolio_path
     
  
