
get '/' do
  erb :index
end

get '/get_ur_racing_on' do
  @player1=Game.last.players.first
  @player2=Game.last.players.last
  erb :game_board
end

get '/results' do

end

post '/playercreate' do
  @player1 = Player.find_or_create_by_name(name: params[:player1])
  @player2 = Player.find_or_create_by_name(name: params[:player2])
  @game = Game.create
  @player1.games << @game
  @player2.games << @game


  redirect '/get_ur_racing_on'
end

post '/winner' do
  @winner = params[:name]
  @time = params[:time]

  @game = Game.last
  @game[:winning_player] = @winner
  @game[:time] = @time
  @game.save
  if request.xhr?
    erb :winner, layout: false
  else
    erb :winner
  end
end
