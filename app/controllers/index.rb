get '/' do
  erb :index
end

get '/get_ur_racing_on' do
  erb :game_board
end

post '/playercreate' do
  @player1 = Player.find_or_create_by_name(name: params[:player1])
  @player2 = Player.find_or_create_by_name(name: params[:player2])
  @game = Game.create
  @player1.games << @game
  @player2.games << @game

  round create?!
  redirect '/get_ur_racing_on'
end
