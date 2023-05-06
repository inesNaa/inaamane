class Contact < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :phone, numericality: { only_integer: true },
  length: { minimum: 8, maximum: 15 }
  validates :body, presence: true, length: { minimum: 10, maximum: 1000 }

end
