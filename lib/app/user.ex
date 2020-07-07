defmodule App.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :uid, :string
    field :bio, :string
    field :email, :string
    field :password, :string
    field :name, :string
    field :number_of_pets, :integer

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:uid, :name, :email, :password, :bio, :number_of_pets])
    |> validate_required([:uid, :name, :email, :password])
  end


end