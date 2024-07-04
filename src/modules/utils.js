export const interpolateTemplate = (template, variables) => {
  return template.replace(/{{(.*?)}}/g, (match, key) => variables[key.trim()]);
};
