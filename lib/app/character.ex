defmodule App.Character do
  use Ecto.Schema
  import Ecto.Changeset

  schema "characters" do
    field :info, :string
    field :name, :string
    field :is_free_this_week, :integer

    timestamps()
  end

  @doc false
  def changeset(character, attrs) do
    character
    |> cast(attrs, [:name, :info, :is_free_this_week])
    |> validate_required([:name, :info, :is_free_this_week])
  end
end
