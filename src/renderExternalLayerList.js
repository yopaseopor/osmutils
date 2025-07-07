// Renders external layers grouped by file, with group title at the top and all layer options listed below (not collapsible)
window.renderExternalLayerList = function(externalLayerGroups) {
    const container = document.getElementById('external-layer-list');
    if (!container) {
        console.warn('No #external-layer-list container found.');
        return;
    }
    container.innerHTML = '';
    Object.entries(externalLayerGroups).forEach(([groupTitle, layers]) => {
        // Group title at the top
        const groupHeader = document.createElement('div');
        groupHeader.className = 'layer-group-title';
        groupHeader.textContent = groupTitle;
        container.appendChild(groupHeader);
        // List all layers in this group (not collapsible)
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'layer-options';
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
            optionsDiv.appendChild(div);
        });
        container.appendChild(optionsDiv);
    });
};
