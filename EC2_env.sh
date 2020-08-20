echo "EC2環境の構築を行います"

echo "erlangの依存パッケージをインストール"
sudo yum install ncurses ncurses-devel openssl openssl-devel gcc-c++ unixODBC unixODBC-devel fop *openjdk-devel inotify-tools
sudo yum --enablerepo=epel install inotify-tools

echo "ワークディレクトリに入ります"
cd ~/work

echo "erlang(v18.2.1)をソースからインストール"
wget http://erlang.org/download/otp_src_22.3.tar.gz
tar zxvf otp_src_22.3.tar.gz
cd otp_src_22.3
./configure

make
sudo make install

echo "erlangバージョン確認"
erl -version


echo "elixir(v1.10.0)をソースからインストール"
wget https://github.com/elixir-lang/elixir/releases/download/v1.10.0/Precompiled.zip
sudo unzip Precompiled.zip -d /opt/elixir

echo "エリクサーバージョン確認"
elixir -v

echo "hexを導入"
mix local.hex


