import projectInfo from './questions/projectInfo.json';
import genericAudit from './questions/genericAudit.json';
import agileAudit from './questions/agileAudit.json';
import vModelAudit from './questions/vModelAudit.json';
import kanbanAudit from './questions/kanbanAudit.json';
import prince2Audit from './questions/prince2Audit.json';

const themeOrder = [
    "projectInfo",
    "genericAudit",
    "agileAudit",
    "vModelAudit",
    "kanbanAudit",
    "prince2Audit"
];

const themes = [
    projectInfo,
    genericAudit,
    agileAudit,
    vModelAudit,
    kanbanAudit,
    prince2Audit
];

const methodologyMapping = {
    "Agile": "agileAudit",
    "Cycle en V": "vModelAudit",
    "Kanban": "kanbanAudit",
    "PRINCE2": "prince2Audit",
};

export {
    themeOrder,
    themes,
    methodologyMapping
};
