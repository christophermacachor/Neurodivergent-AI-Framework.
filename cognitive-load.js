class CognitiveLoadSensor {
    constructor() {
        this.loadSlider = document.getElementById('load-slider');
        this.loadValue = document.getElementById('load-value');
        this.predictBtn = document.getElementById('predict-intervention');
        this.resultDiv = document.getElementById('prediction-result');
        
        if (this.loadSlider) {
            this.loadSlider.addEventListener('input', (e) => {
                this.loadValue.textContent = e.target.value + '%';
            });
            
            this.predictBtn?.addEventListener('click', () => this.predictBestTool());
        }
    }
    
    predictBestTool() {
        const load = parseInt(this.loadSlider?.value || 40);
        
        let bestTool = '';
        let confidence = 0;
        
        if (load > 70) {
            bestTool = 'Goblin Tools';
            confidence = 0.85;
        } else if (load > 50) {
            bestTool = 'Otter.ai';
            confidence = 0.75;
        } else if (load > 30) {
            bestTool = 'MindMeister';
            confidence = 0.70;
        } else {
            bestTool = 'Brain.fm';
            confidence = 0.80;
        }
        
        if (this.resultDiv) {
            this.resultDiv.innerHTML = `
                <h4>🎯 Prediction Result</h4>
                <p>At ${load}% cognitive load, best tool is: <strong>${bestTool}</strong></p>
                <p>Confidence: ${confidence * 100}%</p>
                <p>Expected outcome: Cognitive coherence gain of ${Math.floor(70 - load/2)}%</p>
            `;
            this.resultDiv.style.display = 'block';
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    window.cognitiveSensor = new CognitiveLoadSensor();
});
