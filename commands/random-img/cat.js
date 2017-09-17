const Command = require('../../structures/Command');
const snekfetch = require('snekfetch');

module.exports = class CatCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'cat',
			aliases: ['neko'],
			group: 'random-img',
			memberName: 'cat',
			description: 'Responds with a random cat image.',
			clientPermissions: ['ATTACH_FILES']
		});
	}

	async run(msg) {
		try {
			const { body } = await snekfetch
				.get('http://random.cat/meow');
			return msg.say({ files: [body.file] });
		} catch (err) {
			return msg.say(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
	}
};
