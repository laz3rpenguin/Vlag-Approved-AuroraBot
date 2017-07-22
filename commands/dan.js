exports.run = async (bot, msg, suffix) => {
	const images = [
		"http://www.telegraph.co.uk/content/dam/news/2016/09/29/6455882-ramsay-news-large_trans_NvBQzQNjv4BqbRF8GMdXQ5UNQkWBrq_MOBxo7k3IcFzOpcVpLpEd-fY.jpg",
		"https://images-na.ssl-images-amazon.com/images/I/6132HiPT+AL._UX250_.jpg",
		"https://cdn.discordapp.com/attachments/309045726225104896/338239689997680641/5181242-gordon-01.png",
	];
	msg.channel.send({
		embed: {
			color: 0x3669FA,
			description: `<@208174800793763840> is after you.. ${config.emojis.lennythink}`,
			image: {
				url: images[Math.floor(Math.random() * images.length)],
			},
		},
	});
};
