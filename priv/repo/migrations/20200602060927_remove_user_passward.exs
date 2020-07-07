defmodule App.Repo.Migrations.RemoveUserPassward do
  use Ecto.Migration

  def change do
    alter table(:users) do
      remove :passward
    end
  end
end
