// Renders collapsible groups for external layers in a container with id 'external-layer-list'
window.renderExternalLayerList = function(externalLayerGroups) {
    const container = document.getElementById('external-layer-list');
    if (!container) {
        console.warn('No #external-layer-list container found.');
        return;
    }
    container.innerHTML = '';
    Object.entries(externalLayerGroups).forEach(([groupTitle, layers]) => {
        // Create collapsible group
        const details = document.createElement('details');
        details.className = 'layer-group';
        const summary = document.createElement('summary');
        summary.textContent = groupTitle;
        details.appendChild(summary);
        // List all layers in this group
        layers.forEach(layerObj => {
            const div = document.createElement('div');
            div.className = 'layer-option';
            div.textContent = layerObj.title || '(untitled)';
            // Optionally, add a checkbox or button to select/activate the layer
            details.appendChild(div);
        });
        container.appendChild(details);
    });
};
