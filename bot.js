console.log('el bot esta listo');
const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');




client.on("guildMemberAdd", member => {

	var newJoin = 1;
  const joinchannel = member.guild.channels.find('name', 'bienvenidos');
	const embed = new RichEmbed()
	.setTitle('Bienvenido')
	.setColor(0xF0FFFF)
	.setDescription('¿Que año estas cursando?/ (Primero/Segundo/Tercero/Cuarto) Si no cursa la carrera, escriba invitado');
	joinchannel.send(embed);
 	
		
	

    bot.on("message", (message) => {    

             if ((message.content == 'primero' || message.content == 'Primero' || message.content == 'PRIMERO') && message.member.id == member.id && newJoin){
                var joinrole = member.guild.roles.find('name', 'Fiumers 1º');
                member.addRole(joinrole);
            newJoin = 0;
             }
            if ((message.content == 'segundo' || message.content == 'Segundo' || message.content == 'SEGUNDO') && message.member.id == member.id && newJoin){
                var joinrole = member.guild.roles.find('name', 'Fiumers 2º');
                member.addRole(joinrole);
            newJoin = 0;
            }

            if ((message.content == 'tercero' || message.content == 'Tercero' || message.content == 'TERCERO') && message.member.id == member.id && newJoin){
                var joinrole = member.guild.roles.find('name', 'Fiumers 3º');
                member.addRole(joinrole);
            newJoin = 0;
            }
      
            if ((message.content == 'cuarto' || message.content == 'Cuarto' || message.content == 'CUARTO') && message.member.id == member.id && newJoin){
                var joinrole = member.guild.roles.find('name', 'Fiumers 4º');
                member.addRole(joinrole);
            newJoin = 0;
            }
      
            if ((message.content == 'invitado' || message.content == 'Invitado' || message.content == 'INVITADO') && message.member.id == member.id && newJoin){
                var joinrole = member.guild.roles.find('name', 'invitados');
                member.addRole(joinrole);
            newJoin = 0;
            }
    });
}); 


bot.login('NDkxMDA1MzQ0NzI2NjQ2ODA1.DoBw5Q.Po2xETKKLfVUkIjb1oPB3LFWLJI');
client.login('NDkxMDA1MzQ0NzI2NjQ2ODA1.DoBw5Q.Po2xETKKLfVUkIjb1oPB3LFWLJI');
