class StocksController < ApplicationController
    protect_from_forgery except: :search
    def search
<<<<<<< HEAD
<<<<<<< HEAD
     if params[:stock].present? 
       @stock = Stock.new_lookup(params[:stock])
       if @stock
         respond_to do |format|
           format.js { render partial: 'users/result' }
         end
       else
         flash[:danger] = "You have entered an incorrect symbol"
         redirect_to my_portfolio_path
       end

     else
       flash[:danger] = "You have entered an empty search string"
       redirect_to my_portfolio_path
     end
   end
=======
=======
>>>>>>> parent of a14211e... handle invald search results
        @stock = Stock.new_lookup(params[:stock])
        render 'users/my_portfolio'
    end
>>>>>>> parent of a14211e... handle invald search results
end