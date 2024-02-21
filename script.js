document.addEventListener('DOMContentLoaded', function() {
    var timelineData = [
        { date: '2018', event: "Bachelor's Degree in Computer Science", location: 'University Name, Location' },
        { date: '2019-2020', event: 'Software Engineer Intern', location: 'Company Name, Location' }
    ];

    // Render the timeline
    var timelineElement = document.getElementById('timeline');
    timelineData.forEach(function(item) {
        var li = document.createElement('li');
        li.classList.add('timeline-event');
        li.innerHTML = `
            <div class="date">${item.date}</div>
            <div class="content">
                <h3>${item.event}</h3>
                <p>${item.location}</p>
            </div>
        `;
        timelineElement.appendChild(li);
    });
});
