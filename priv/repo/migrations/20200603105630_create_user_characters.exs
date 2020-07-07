defmodule App.Repo.Migrations.CreateUserCharacters do
  use Ecto.Migration

  def change do
    create table(:user_characters) do
      add :user_id, :integer
      add :character_id, :integer
      add :score, :integer

      timestamps()
    end

  end
end
