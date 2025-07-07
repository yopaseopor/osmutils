// Renders collapsible groups for external layers with checkboxes to toggle visibility
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
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = layerObj._olLayer.getVisible();
            checkbox.addEventListener('change', function() {
                layerObj._olLayer.setVisible(this.checked);
            });
            const label = document.createElement('label');
            label.textContent = layerObj.title || '(untitled)';
            div.appendChild(checkbox);
            div.appendChild(label);
            details.appendChild(div);
        });
        container.appendChild(details);
    });
};
