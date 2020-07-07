defmodule App.Config do
  use Ecto.Schema
  import Ecto.Changeset

  schema "configs" do
    field :sound_vol, :integer
    field :user_id, :integer

    timestamps()
  end

  @doc false
  def changeset(config, attrs) do
    config
    |> cast(attrs, [:user_id, :sound_vol])
    |> validate_required([:user_id, :sound_vol])
  end
end
