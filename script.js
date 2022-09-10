const TelegramBot = require ( 'node-telegram-bot-api' );
const bot = new TelegramBot(process.env.5785846150:AAG3_712upQM2FhuiC3Y7PmhukwRRG33jkI, { polling: true });
const request = require ( 'request' );
const express = exiger ( 'express' );
const app = express();


nécessite ( 'dotenv' ).config();



bot.onText( /\/movie (.+)/ , ( msg, match ) => {
     let movie = match[ 1 ];
     let chatId = msg.chat.id;
    request( `http://www.omdbapi.com/?apiKey= ${process.env.5785846150:AAG3_712upQM2FhuiC3Y7PmhukwRRG33jkI} = ${movie} ` , ( erreur, réponse, corps ) => {
         if (!error && response.statusCode = = 200 ) {
            bot.sendMessage(chatId, '_Looking for _' + movie + '...' , { parse_mode: 'Markdown' })
                .then( ( msg ) => {
                     let res = JSON .parse(body);
                    bot.sendPhoto(chatId, res.Poster, { caption: 'Result: \nTitle: ' + res.Title + '\nYear: ' + res.Year + '\nRated: ' + res.Rated + '\nReleased: ' + res.Released + '\nRuntime : ' + res.Runtime + '\nGenre : ' + res.Genre + '\nDirector : ' + res.Director + '\nPlot : ' + res.Plot })
                        .catch( ( err ) => {
                             si (err) {
                                bot.sendMessage(chatId, 'Erreur de recherche, Vérifiez le titre du film' );
                            }
                        })
                 })


        }
    })
})

bot.onText( /\/about (.+)/ , ( msg, match ) => {
     if (match[ 1 ]) {
         let chatId = msg.chat.id;
        bot.sendMessage(chatId,
            `finder bot\nbot où vous pouvez rechercher un film et obtenir des détails à son sujet.` , { parse_mode: 'Markdown' });
    }
})

const PORT = processus.env.PORT || 3000 ;

app.listen(PORT, function () {
     console .log( `Le serveur tourne sur le port ${PORT} ` );
});
