function speedChecker(speed) {
	const speedlimit = 70;
	const pointsPer5km = 1;
	const maxPoints = 12;

	if (speed <= speedlimit) {
		console.log("Ok");
	} else {
		const points = Math.floor((speed - speedlimit) / 5) * pointsPer5km;

		if (points > maxPoints) {
			console.log("License suspended");
		} else {
			console.log(`Points: ${points}`);
		}
	}

}

speedChecker(80);
speedChecker(130);
speedChecker(68);
speedChecker(140);