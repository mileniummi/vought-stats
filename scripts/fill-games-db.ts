import axios from "axios";
import {prisma} from "../src/backend/utils/prisma";

const doFill = async () => {
    let resultGames: any[] = []
    // const allGames = await axios.get('https://rawg-video-games-database.p.rapidapi.com/games', {
    //     params: {'key': 'c7999ae9253d4d219d0d8f0987620f22', metacritic: '80', page_size: '40'},
    //     headers: {
    //         'X-RapidAPI-Key': '01c7480e0cmshbe799e02d22fe4bp13d4a9jsn00eccef86ba1',
    //         'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
    //     }
    // })
    // resultGames = [...resultGames, ...allGames.data.results]
    for (let i = 1; i <= 20; i++ ) {
        const allGames = await axios.get('https://rawg-video-games-database.p.rapidapi.com/games', {
            params: {'key': 'c7999ae9253d4d219d0d8f0987620f22', metacritic: '80', page_size: '40', page: `${i}` },
            headers: {
                'X-RapidAPI-Key': '01c7480e0cmshbe799e02d22fe4bp13d4a9jsn00eccef86ba1',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
            }
        })
        resultGames = [...resultGames, ...allGames.data.results]
    }

    const dbObjects = resultGames.filter(game => {
        if (game.name && game.background_image) {
            return true
        }
        return false
    })


    const result = await prisma.voteOption.createMany({
        data: dbObjects.map(game => ({
            name: game.name,
            imageUrl: game.background_image
        }))
    })

    console.log("result?", result)

}

doFill();