defmodule App.Repo.Migrations.CreateConfigs do
  use Ecto.Migration

  def change do
    create table(:configs) do
      add :user_id, :integer
      add :sound_vol, :integer

      timestamps()
    end

  end
end
