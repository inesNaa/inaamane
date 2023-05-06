class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :company
      t.string :city
      t.string :subject
      t.text :body

      t.timestamps
    end
  end
end
