defmodule App.Util do
    def gen_hash_uid(params) do
        str = params["email"] <> params["name"] <> params["password"]
        uid_val = :crypto.hash(:sha256, str) |> Base.encode16(case: :lower)
        test = 1000000000000
        %{"uid" => uid_val}
    end
end
