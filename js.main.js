// Tool data from your Python class
const toolsData = {
    'Otter.ai': {
        concept: 'Supports auditory processing and executive function',
        interventions: [
            'Enable real-time captions during Zoom calls',
            'Use recorded summaries to reinforce key takeaways',
            'Provide editable transcripts to organize thoughts visually'
        ]
    },
    'Goblin Tools': {
        concept: 'Breaks down overwhelming tasks into manageable steps',
        interventions: [
            'Teach clients to chunk complex goals',
            'Use tone-checking for emotional regulation',
            'Set flexible deadlines that align with energy patterns'
        ]
    },
    'MindMeister': {
        concept: 'Enhances visual-spatial thinking by mapping ideas',
        interventions: [
            'Encourage visual brainstorming during sessions',
            'Use mind maps as alternatives to traditional essays',
            'Let clients create mood maps to track emotional patterns'
        ]
    },
    'NeuronWriter': {
        concept: 'Combines neuroscience principles with AI for content creation',
        interventions: [
            'Suggest templates that reduce cognitive load',
            'Encourage AI-generated outlines to support sequencing',
            'Teach editing in focused sprints using Pomodoro rhythm'
        ]
    },
    'Brain.fm': {
        concept: 'Uses AI-generated soundscapes to entrain brainwaves',
        interventions: [
            'Recommend focus mode before cognitively demanding tasks',
            'Use relaxation mode post-session to consolidate learning',
            'Incorporate into transition rituals'
        ]
    }
};

// Neuroscience data
const neuroscienceData = {
    'default_mode_network': {
        function: 'Introspection and imagination',
        ai_support: 'Visual mapping apps enhance this network',
        geometric_truth: 'Quantum superposition pattern processing'
    },
    'prefrontal_cortex': {
        function: 'Decision-making and executive function',
        ai_support: 'AI interventions scaffold task transitions',
        geometric_truth: 'Coherence field optimization'
    },
    'frontoparietal_networks': {
        function: 'Working memory and task initiation',
        ai_support: 'AI-powered scheduling builds robust networks',
        geometric_truth: 'Multi-dimensional entanglement mapping'
    },
    'neuroplasticity': {
        function: 'Form new neural connections',
        ai_support: 'Tools reinforce cognitive preferences',
        geometric_truth: 'Living system pattern evolution'
    }
};

// Populate tools page
function populateTools() {
    const container = document.getElementById('tools-container');
    if (!container) return;
    
    container.innerHTML = '';
    for (const [name, data] of Object.entries(toolsData)) {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.innerHTML = `
            <h3>${name}</h3>
            <p><strong>Concept:</strong> ${data.concept}</p>
            <p><strong>Interventions:</strong></p>
            <ul class="intervention-list">
                ${data.interventions.map(i => `<li>${i}</li>`).join('')}
            </ul>
        `;
        container.appendChild(toolCard);
    }
}

// Populate neuroscience page
function populateNeuroscience() {
    const container = document.getElementById('neuroscience-grid');
    if (!container) return;
    
    container.innerHTML = '';
    for (const [name, data] of Object.entries(neuroscienceData)) {
        const card = document.createElement('div');
        card.className = 'feature-card';
        card.innerHTML = `
            <h3>${name.replace(/_/g, ' ').toUpperCase()}</h3>
            <p><strong>Function:</strong> ${data.function}</p>
            <p><strong>AI Support:</strong> ${data.ai_support}</p>
            <p><strong>Geometric Truth:</strong> ${data.geometric_truth}</p>
        `;
        container.appendChild(card);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    populateTools();
    populateNeuroscience();
});
