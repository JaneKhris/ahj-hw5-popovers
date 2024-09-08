export class Tooltip {
    constructor() {
        this.popover = false;
    }

    showTooltip(title, text, element) {
        const tooltipElement = document.createElement('DIV');

        tooltipElement.classList.add('popover')
        tooltipElement.innerHTML = `
        <div class="popover-title">${title}</div>
        <div class="popover-text">${text}</div>
        `

        document.body.appendChild(tooltipElement);

        const { left, top } = element.getBoundingClientRect();

        tooltipElement.style.left = left + element.offsetWidth / 2 - tooltipElement.offsetWidth / 2 + 'px';
        tooltipElement.style.top= top - tooltipElement.offsetHeight + 'px';

        this.popover = true;
    }

    removeTooltip() {
        const tooltip = document.querySelector('.popover')
        tooltip.remove();

        this.popover = false;
    }
}



