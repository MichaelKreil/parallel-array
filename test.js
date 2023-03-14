"use strict"

const { streamFileData } = require('./index.js');

(async function () {
	await testForEach();
	await testStreamFileData();
})()

async function testForEach() {
	let list = [1, 1, 2, 3, 5];

	list.forEach(item => {
		item += 2;
	})

	await list.forEachAsync(async item => {
		item += 2;
		await new Promise(res => setTimeout(res, 1));
	})

	await list.forEachAsync(async item => {
		item += 2;
		await new Promise(res => setTimeout(res, 1));
	}, 3)

}


async function testStreamFileData() {
	let stream = await streamFileData('https://storage.googleapis.com/datenhub-net-static/data/test.geojsonl.br');
	//let stream = await streamFileData('test.tsv.br');
	//let stream = await streamFileData('https://storage.googleapis.com/datenhub-net-static/data/test.tsv.br');
	for await (let line of stream) {
		console.log(line);
	}
}