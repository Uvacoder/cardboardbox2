exports.run = async (client, message, args, level) => {
	let filter = true

	let count = parseInt(args[0]) || 1;

	let responsePlace = message.channel;
	await message.delete();

	const messages = await message.channel.fetchMessages({ limit: Math.min(count, 100), before: message.id });
	const deleted = messages.size;

	message.channel.bulkDelete(messages.size);

	(await responsePlace.send(`:white_check_mark: **Cleared \`${messages.size}\` message${deleted === 1 ? '' : 's'}.**`)).delete(2000);
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: "User"
};

exports.help = {
	name: "purge",
	category: "System",
	description: "Get those messages out of here, will ya?",
	usage: "purge <amount>"
};
