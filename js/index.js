$(document).ready(function () {
	$("#cover-photo").mouseenter(function () {
		$(this).effect("bounce", { times: 4 }, 2000);
	});
	// Inject experiences
	const experiencesHTML = experiences.map(experience => {
		const title = `<h2>${experience.title}</h2>`;
		const company = `<h5>${experience.company}</h5>`;
		const dates = `<h6>${experience.startDate} - ${experience.endDate}</h6>`;
		let pointsDiv = ``;
		const points = experience?.bulletPoints?.forEach(point => {
			const singlePoint =
				`
			<p>
				<i class="fas fa-chevron-right"></i>
				${point}
			</p>
			`;
			pointsDiv += singlePoint;
		});
		return (
			`<div class="experience">
				${title}
				${company}
				${dates}
				${pointsDiv}
			</div>`
		);
	});
	$("#inject-experiences").append(experiencesHTML);
});