defmodule Appweb.ApiController do
    use AppWeb, :controller

    def check(conn, _params) do
        {err, res_json} = Poison.encode(%{:isWorking => true})
    
        Plug.Conn.send_resp(conn, 200, res_json)
    end
end
