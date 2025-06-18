import projectInfo from './questions/projectInfo.json';
import genericAudit from './questions/genericAudit.json';
import scrumAudit from './questions/scrumAudit.json';


const themeOrder = [
    "projectInfo",
    "genericAudit",
    "scrumAudit",
];

const themes = [
    projectInfo,
    genericAudit,
    scrumAudit,
];

const methodologyMapping = {
    "Scrum": "scrumAudit",
};

export {
    themeOrder,
    themes,
    methodologyMapping
};
