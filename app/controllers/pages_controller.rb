class PagesController < ApplicationController
  def home
    @contact = Contact.new
  end

  def create_contact
    @contact = Contact.new(contact_params)
    if @contact.save
      flash[:success] = "Votre message a été envoyé avec succès."
      redirect_to root_path
    else
      flash.now[:error] = "Une erreur est survenue. Veuillez vérifier vos informations."
      render :home
    end
  end


  private

  def contact_params
    params.require(:contact).permit(:name, :email, :phone, :company, :city, :subject, :body)
  end

end


