defmodule Appweb.UserController do
    use AppWeb, :controller
    alias App.User
    alias App.Repo
    alias App.Util

    def check(conn, _params) do
        {err, res_json} = Poison.encode(%{:isWorking => true})
    
        Plug.Conn.send_resp(conn, 200, res_json)
    end

    def create(conn, params) do
        is_valid_mail = EmailChecker.Check.Format.valid?(params["email"])
        uid_data = Util.gen_hash_uid(params)
        user_data = Map.merge(params, uid_data)
        search_data = Enum.map(user_data, fn({key, value}) -> {String.to_existing_atom(key), value} end)
        does_user_exist = 
        Repo.get_by(User, search_data)
        |> is_nil()

        if does_user_exist && is_valid_mail do
            changeset = User.changeset(%User{}, user_data)
            Repo.insert(changeset)
        end

        {err, res_json} = Poison.encode(%{:isWorking => true})
        Plug.Conn.put_resp_content_type(conn, "application/json")
        |> Plug.Conn.send_resp(200, res_json)
    end

    def signin(conn, params) do
        search_data = Enum.map(params, fn({key, value}) -> {String.to_existing_atom(key), value} end)
        user = Repo.get_by(User, search_data)
        return_val = user_signin(user)
            
        {err, res_json} = Poison.encode(return_val)
        Plug.Conn.put_resp_content_type(conn, "application/json")
        |> Plug.Conn.send_resp(200, res_json)
    end

    def user_signin(nil) do
        %{:err => "user_does_not_exist"}
    end

    def user_signin(user) do
        %{:user_uid => user.uid}
    end

    def get_data(conn, params) do
        search_data = Enum.map(params, fn({key, value}) -> {String.to_existing_atom(key), value} end)
        user = Repo.get_by(User, search_data)
        does_user_exist = is_nil(user)

        {err, res_json} = Poison.encode(user)
        Plug.Conn.put_resp_content_type(conn, "application/json")
        |> Plug.Conn.send_resp(200, res_json)
    end

    def owned_character_list(conn, params) do

    end
end
