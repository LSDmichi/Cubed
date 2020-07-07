defmodule App.Repo.Migrations.AddUserPass do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :passward, :string
    end

    alter table(:users) do
      add :password, :string
    end

    alter table(:characters) do
      modify :info, :text
    end
  end
end
