defmodule App.Repo.Migrations.CharacterAddIsfreeFlag do
  use Ecto.Migration

  def change do
    alter table(:characters) do
      add :is_free_this_week, :boolean
    end
  end
end
