import request from 'superagent'
import { GameDB, Game } from '../../models/Game'

const rootUrlGames = '/api/v1/games'
let limit=""

export async function getGames() {
  const res = await request.get(rootUrlGames)

  return res.body as Promise<Game[]>
}

export async function getGameById(id: number) {
  const res = await request.get(`${rootUrlGames}/${id}`)

  return res.body as Promise<Game>
}

export async function getGamesFromAPI(limit:string|number) {
  const res = await request.get(
    `https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&client_id=NXgs9nuwJa&limit=${limit}`
  )
  console.log(res.body.games);
  
  return res.body.games
}
