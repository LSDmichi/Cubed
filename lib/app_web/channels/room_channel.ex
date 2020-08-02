defmodule AppWeb.RoomChannel do
    use Phoenix.Channel
    use Phoenix.Socket

    def join("room:lobby", _message, socket) do
        IO.inspect("went through lobby")
        {:ok, socket}
    end

    def join("room:" <> user_id, _params, socket) do
        IO.inspect("went through userspecific_chat")
        IO.inspect(user_id)
        {:ok, socket}
    end

    def id(socket) do
        length = 12
        id = :crypto.strong_rand_bytes(length) |> Base.encode64 |> binary_part(0, length)
        "users_socket:#{id}"
    end

    def handle_in("new_msg", %{"body" => body, "name" => name}, socket) do
        id = socket.assigns[:user_id] 
        IO.inspect(id)
        broadcast!(socket, "new_msg", %{body: body, name: name})
        IO.inspect("new_msg")
        {:noreply, socket}
    end

    def handle_in("private_msg", %{"body" => body, "name" => name, "to_id" => id}, socket) do
        sender_id = socket.assigns[:user_id] 
        IO.inspect(sender_id)
        AppWeb.Endpoint.broadcast("room:" <> id, "private_msg", %{body: body, name: name})
        IO.inspect("private_msg")
        {:noreply, socket}
    end
end