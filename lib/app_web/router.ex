defmodule AppWeb.Router do
  use AppWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", Appweb do
    pipe_through :api

    get "/check", ApiController, :check
    get "/check/version", ApiController, :version

    post "/setting/get", SettingController, :get
    post "/setting/update", SettingController, :update
    
    post "/user/paymentrecord", UserController, :payment_record
    post "/user/owned/character/list", UserController, :owned_character_list
    post "/user/data", UserController, :get_data
    post "/user/create", UserController, :create
    post "/user/signin", UserController, :signin


    get "/character/list", CharacterController, :character_list
    post "/character/buy", CharacterController, :buy
  end

  scope "/", AppWeb do
    pipe_through :browser

    get "/", PageController, :index
    get "/matching", MatchingController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", AppWeb do
  #   pipe_through :api
  # end

  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser
      live_dashboard "/dashboard", metrics: AppWeb.Telemetry
    end
  end
end
