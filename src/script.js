document.addEventListener('DOMContentLoaded', function() {
    // Sample timeline data
    var timelineData = [
        { 
            date: '11/2023 – Present', 
            event: 'Graduate Student Representative',
            location: 'University of Washington, Tacoma',
            description: `<ul>
                <li>Communicating with students to understand their questions and the overall environment of the graduate CS students.</li>
                <li>Presenting before CS faculty to represent current student’s academic needs and contribute to the regular faculty meetings.</li>
                <li>Being responsible for properly capturing and evaluating student sentiment with quantifiable measures in order to be able to show valid support for proposed changes in the community.</li>
            </ul>`
        },
        { 
            date: '3/2023 – Present', 
            event: 'Research Assistant',
            location: 'Privacy Preserving Machine Learning group at University of Washington',
            description: `<ul>
                <li>Leading the LLM team within an interdisciplinary healthcare research group to improve GPT-3.5 powered medical chatbot via prompt engineering and Azure Prompt Flow methods to ensure model’s interpretability and controllability.</li>
                <li>Studied novel differential privacy techniques to ensure data privacy and user confidentiality during the client-to-LLM communication via an Azure OpenAI API.</li>
                <li>Leading mobile app team, developing a second version of existing mobile app in React that is cross-platform and easy to deploy.</li>
            </ul>`
        },
        { 
            date: '10/2023 – Current', 
            event: 'Software Engineer',
            location: 'Clinical Information Research Group at University of Washington',
            description: `<ul>
                <li>Worked independently with a group of scientists on various bioinformatics-related flask projects with a focus on FHIR compliant web applications.</li>
                <li>Used Docker-based workflow, interacting with various environment deployment tools for open-source projects within GitHub.</li>
            </ul>`
        },
        { 
            date: '06/2021 – 01/2023', 
            event: 'Software Engineer Intern',
            location: 'BizValet',
            description: `<ul>
                <li>Did full stack engineering in .NET. Worked in MVC framework, developing features used internally by store owners and externally by their clients, such as enabling Twilio integration in addition to existing the communication channels.</li>
            </ul>`
        }
        // Add more timeline events as needed
    ];

    // Render the timeline
    var timelineElement = document.getElementById('timeline');
    timelineData.forEach(function(item) {
        var div = document.createElement('div');
        div.classList.add('timeline-event');
        div.innerHTML = `
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-content">
                <h3>${item.event}</h3>
                <h4>${item.location}</h4>
                <p>${item.description}</p>
            </div>
        `;
        timelineElement.appendChild(div);
    });
});
