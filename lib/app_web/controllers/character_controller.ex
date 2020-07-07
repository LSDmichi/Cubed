defmodule Appweb.CharacterController do
    use AppWeb, :controller
    alias App.Character
    alias App.Repo

    def character_list(conn, _params) do
        data = Repo.all(Character)
        {err, res_json} = Poison.encode(data)
        IO.inspect(data)
        IO.inspect(res_json)
        Plug.Conn.put_resp_content_type(conn, "application/json")
        |> Plug.Conn.send_resp(200, res_json)
    end

    def buy(conn, params) do
        {err, res_json} = Poison.encode(%{:isWorking => true})
    
        Plug.Conn.send_resp(conn, 200, res_json)
    end
end
